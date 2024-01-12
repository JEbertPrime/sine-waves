export type WaveCharacteristicFunction = (x: number, xOffset: number) => number;

export class SineWave {
  angularFrequency: WaveCharacteristicFunction;
  amplitude: WaveCharacteristicFunction;
  phase: WaveCharacteristicFunction;
  color: string;
  yOffset: WaveCharacteristicFunction;
  constructor({
    frequency,
    amplitude,
    phase,
    color,
    yOffset,
  }: {
    frequency: number | WaveCharacteristicFunction;
    amplitude: number | WaveCharacteristicFunction;
    phase: number | WaveCharacteristicFunction;
    color: string;
    yOffset: number | WaveCharacteristicFunction;
  }) {
    this.angularFrequency =
      frequency instanceof Function
        ? frequency
        : () => {
            return frequency * 2 * Math.PI;
          };
    this.amplitude = amplitude instanceof Function ? amplitude : () => amplitude;
    this.phase = phase instanceof Function ? phase : () => phase;
    this.color = color;
    this.yOffset = yOffset instanceof Function ? yOffset : () => yOffset;
  }
  getYFromX(x: number, xOffset: number): number {
    return this.amplitude(x, xOffset) * Math.sin(this.angularFrequency(x, xOffset) * x + this.phase(x, xOffset)) + this.yOffset(x, xOffset);
  }
}
