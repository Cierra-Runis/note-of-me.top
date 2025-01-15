'use client';

import { Button, ButtonGroup } from '@nextui-org/button';
import { Midi } from '@tonejs/midi';
import { useState } from 'react';
import * as Tone from 'tone';
import { useFilePicker } from 'use-file-picker';
import { FileTypeValidator } from 'use-file-picker/validators';

export default function MidiPage() {
  const [midi, setMidi] = useState<Midi>();

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

  return (
    <section>
      <h1>Midi</h1>
      <ButtonGroup>
        <Button isLoading={loading} onPress={openFilePicker}>
          Pick
        </Button>
        <Button
          isDisabled={midi === undefined || errors.length > 0}
          onPress={() => {
            if (midi === undefined) return;
            midi.tracks.forEach((track) => {
              //create a synth for each track
              const synth = new Tone.PolySynth(Tone.Synth, {
                envelope: {
                  attack: 0.02,
                  decay: 0.1,
                  release: 1,
                  sustain: 0.3,
                },
              }).toDestination();
              //schedule all of the events
              track.notes.forEach((note) => {
                synth.triggerAttackRelease(
                  note.name,
                  note.duration,
                  note.time + Tone.now(),
                  note.velocity,
                );
              });
            });
          }}
        >
          Play
        </Button>
      </ButtonGroup>
      <div></div>
    </section>
  );
}
