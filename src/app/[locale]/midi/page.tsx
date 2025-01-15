'use client';

import { Button, ButtonGroup } from '@nextui-org/button';
import { Midi } from '@tonejs/midi';
import { useState } from 'react';
import * as Tone from 'tone';
import { useFilePicker } from 'use-file-picker';
import { FileTypeValidator } from 'use-file-picker/validators';

export default function MidiPage() {
  const [midi, setMidi] = useState<Midi>();
  const [activeKeys, setActiveKeys] = useState<{ [key: string]: boolean }>({});
  const { errors, loading, openFilePicker } = useFilePicker({
    accept: '.mid',
    multiple: false,

    onFilesSuccessfullySelected: ({ filesContent }) => {
      const file = filesContent[0];
      setMidi(new Midi(file.content));
    },
    readAs: 'ArrayBuffer',
    validators: [new FileTypeValidator(['mid'])],
  });

  const startVisualization = () => {
    if (!midi) return;

    midi.tracks.forEach((track, trackIndex) => {
      const synth = new Tone.PolySynth(Tone.Synth, {
        envelope: {
          attack: 0.02,
          decay: 0.1,
          release: 1,
          sustain: 0.3,
        },
      }).toDestination();

      track.notes.forEach((note) => {
        // Trigger sound
        synth.triggerAttackRelease(
          note.name,
          note.duration,
          note.time + Tone.now(),
          note.velocity,
        );

        // Trigger visualization
        setTimeout(() => {
          setActiveKeys((prev) => ({
            ...prev,
            [`${trackIndex}-${note.name}`]: true,
          }));
        }, note.time * 1000);

        setTimeout(
          () => {
            setActiveKeys((prev) => ({
              ...prev,
              [`${trackIndex}-${note.name}`]: false,
            }));
          },
          (note.time + note.duration) * 1000,
        );
      });
    });
  };

  const renderKeyboard = (trackIndex: number) => {
    const keys = Array.from({ length: 88 }, (_, i) => i + 21); // MIDI notes from 21 (A0) to 108 (C8)
    return (
      <div className='flex gap-0.5 lg:gap-1'>
        {keys.map((key) => {
          const note = Tone.Frequency(key, 'midi').toNote();
          const isActive = activeKeys[`${trackIndex}-${note}`];
          return (
            <div
              className={`h-5 w-1 rounded-md bg-foreground-50 transition-all duration-100 ease-in-out lg:h-10 lg:w-2`}
              key={note}
              style={{
                backgroundColor: isActive
                  ? `hsl(${(trackIndex * 30) % 360}, 100%, 70%)`
                  : undefined,
              }}
            ></div>
          );
        })}
      </div>
    );
  };

  return (
    <section className='flex h-full flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <h1 className='mb-4 text-2xl font-bold'>Midi Visualizer</h1>
      <ButtonGroup>
        <Button isLoading={loading} onPress={openFilePicker} variant='ghost'>
          Pick
        </Button>
        <Button
          isDisabled={midi === undefined || errors.length > 0}
          onPress={startVisualization}
          variant='ghost'
        >
          Play
        </Button>
      </ButtonGroup>
      <div className='mt-8 flex flex-col items-center justify-center space-y-4'>
        {midi &&
          midi.tracks.map((_, index) => (
            <div className='flex justify-center' key={index}>
              {renderKeyboard(index)}
            </div>
          ))}
      </div>
    </section>
  );
}

/// TODO: Add Playlist
/// TODO: Add Timeline
/// TODO: Add Remote/Local Midi Source Support
/// FIXME: Multiple Files Conflict
/// FIXME: Visualizer Sticky when Continuously Playing Same Note
