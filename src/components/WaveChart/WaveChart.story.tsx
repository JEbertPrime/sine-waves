import { WaveChart } from './WaveChart';
import { SineWave } from './SineWave';
const waves = [];
for (let i = 0; i < 60; i++) {
  waves.push(
    new SineWave({
      frequency: 0.00154,
      amplitude: (x, xOffset) => {
        return Math.cos((x - xOffset) / (40 + Math.sin(x / 10))) * 20 + i * 4;
      },
      phase: i / 20,
      color: `rgba(${80 + i / 2},${100 + i / 2},${170 - i / 4},${1 - i / 60})`,
      yOffset: 0,
    }),
  );
}

export default {
  title: 'WaveChart',
  component: WaveChart,
  argTypes: {
    waves: {
      options: ['Single Wave', 'Multiple Waves', 'Show Amplitude Curve'],
      description:
        'An array of SineWave objects. Select from a single wave, multiple waves (with incremented phase and amplitude), and multiple waves with the amplitude curve',
      mapping: {
        'Single Wave': [
          new SineWave({
            frequency: 0.0025,
            amplitude: (x, xOffset) => {
              return Math.cos((x - xOffset) / (40 + Math.sin(x / 10))) * 20 + 4;
            },
            phase: 0,
            color: 'blue',
            yOffset: 0,
          }),
        ],
        'Multiple Waves': waves,
        'Show Amplitude Curve': [
          ...waves,
          new SineWave({
            frequency: 0,
            amplitude: (x, xOffset) => {
              return Math.cos((x - xOffset) / (40 + Math.sin(x / 10))) * 20 + 4;
            },
            phase: Math.PI / 2,
            color: 'red',
            yOffset: 0,
          }),
        ],
      },
    },
  },
};

export const Default = {
  args: {
    waves: [
      new SineWave({
        frequency: 0.0025,
        amplitude: 40,
        phase: 0,
        color: 'blue',
        yOffset: 0,
      }),
    ],
  },
};
export const VariableAmplitude = {
  args: {
    startFull: true,
    waves,
    height: 500,
  },
};
