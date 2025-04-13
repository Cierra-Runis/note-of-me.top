'use client';

import {
  MegaphoneIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from '@heroicons/react/24/outline';
import { Button, ButtonGroup } from '@heroui/button';
import { addToast } from '@heroui/toast';
import { Midi } from '@tonejs/midi';
import { useRef, useState } from 'react';
import * as Tone from 'tone';
import { useFilePicker } from 'use-file-picker';

export default function MidiPlayer() {
  const [midi, setMidi] = useState<Midi>();
  const [activeKeys, setActiveKeys] = useState<{ [key: string]: boolean }>({});
  const [isPlaying, setIsPlaying] = useState(false);
  const synthRefs = useRef<Tone.PolySynth[]>([]);
  const muteRefs = useRef<boolean[]>([]);
  const soloRefs = useRef<boolean[]>([]);

  const { loading, openFilePicker } = useFilePicker({
    multiple: false,
    onFilesSuccessfullySelected: ({ filesContent }) => {
      const file = filesContent[0];
      try {
        const midiData = new Midi(file.content);
        setMidi(midiData);
        resetRefs(midiData);
      } catch {
        addToast({
          color: 'danger',
          description: '不合法的 MIDI 文件，请选择正确的文件',
          title: '错误',
        });
      }
    },
    readAs: 'ArrayBuffer',
  });

  const resetRefs = (midiData: Midi) => {
    synthRefs.current = midiData.tracks.map(() => {
      return new Tone.PolySynth(Tone.Synth).toDestination();
    });
    muteRefs.current = midiData.tracks.map(() => false);
    soloRefs.current = midiData.tracks.map(() => false);
  };

  const toggleMute = (index: number) => {
    muteRefs.current[index] = !muteRefs.current[index];
  };

  const toggleSolo = (index: number) => {
    soloRefs.current[index] = !soloRefs.current[index];
  };

  const startPlayback = async () => {
    if (isPlaying) {
      return addToast({
        color: 'warning',
        description: '正在播放中，请稍后再试',
        title: '提示',
      });
    }

    if (!midi) {
      return addToast({
        color: 'warning',
        description: '请先选择 MIDI 文件',
        title: '错误',
      });
    }

    setIsPlaying(true);
    await Tone.start();
    Tone.Transport.stop();
    Tone.Transport.cancel();

    midi.tracks.forEach((track, i) => {
      const synth = synthRefs.current[i];
      track.notes.forEach((note) => {
        Tone.Transport.schedule((time) => {
          const hasSolo = soloRefs.current.some(Boolean);
          const isSolo = soloRefs.current[i];
          if (hasSolo && !isSolo) return;

          const isMuted = muteRefs.current[i];
          if (isMuted) return;

          synth.triggerAttackRelease(
            note.name,
            note.duration,
            time,
            note.velocity,
          );

          Tone.Draw.schedule(() => {
            setActiveKeys((prev) => ({ ...prev, [`${i}-${note.name}`]: true }));
            setTimeout(() => {
              setActiveKeys((prev) => ({
                ...prev,
                [`${i}-${note.name}`]: false,
              }));
            }, note.duration * 1000);
          }, time);
        }, note.time);
      });
    });

    Tone.Transport.start();

    setIsPlaying(false);
  };

  const renderKeyboard = (trackIndex: number) => {
    const keys = Array.from({ length: 88 }, (_, i) => i + 21);
    return (
      <div className='flex gap-0.5 lg:gap-1'>
        {keys.map((key) => {
          const note = Tone.Frequency(key, 'midi').toNote();
          const isActive = activeKeys[`${trackIndex}-${note}`];
          return (
            <div
              className='h-5 w-1 rounded-md bg-foreground-50 lg:h-8 lg:w-2'
              key={note}
              style={{
                backgroundColor: isActive
                  ? `hsl(${(trackIndex * 30) % 360}, 100%, 70%)`
                  : undefined,
              }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <section className='flex h-full flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <h1 className='text-2xl font-bold'>MIDI 播放器</h1>
      <ButtonGroup>
        <Button isLoading={loading} onPress={openFilePicker} variant='ghost'>
          选择
        </Button>
        <Button
          disabled={!midi || isPlaying}
          onPress={startPlayback}
          variant='ghost'
        >
          播放
        </Button>
      </ButtonGroup>

      <div className='flex flex-col'>
        {midi &&
          midi.tracks.map((track, i) => (
            <div key={i}>
              <div className='flex items-center gap-3'>
                <span
                  style={{
                    color: `hsl(${(i * 30) % 360}, 100%, 70%)`,
                  }}
                >
                  {track.name || `轨道 ${i + 1}`}
                </span>
              </div>
              <div className='flex gap-4'>
                {renderKeyboard(i)}
                <ButtonGroup>
                  <Button
                    isIconOnly
                    onPress={() => toggleMute(i)}
                    size='sm'
                    startContent={
                      muteRefs.current[i] ? (
                        <SpeakerXMarkIcon className='w-4' />
                      ) : (
                        <SpeakerWaveIcon className='w-4' />
                      )
                    }
                    variant='ghost'
                  />

                  <Button
                    isIconOnly
                    onPress={() => toggleSolo(i)}
                    size='sm'
                    startContent={<MegaphoneIcon className='w-4' />}
                    variant={soloRefs.current[i] ? 'faded' : 'ghost'}
                  />
                </ButtonGroup>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
