import React, { useRef, useEffect, CanvasHTMLAttributes } from 'react';

import { SineWave } from './SineWave';

interface WaveChartAttributes<T> extends CanvasHTMLAttributes<T> {
  waves: SineWave[];
  startFull: boolean;
  step: number;
}

export const WaveChart = (props: WaveChartAttributes<HTMLCanvasElement>) => {
  const { waves, startFull, height = 400, width = 800, step = 4, ...rest } = props;

  const canvasRef = useRef();
  const frameRef = useRef(0);

  function drawWaves(waves: SineWave[], context: CanvasRenderingContext2D, x: number, xOffset: number, step?: number) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    const yOffset = context.canvas.height / 2;
    for (let i = waves.length - 1; i >= 0; i--) {
      const wave = waves[i];
      let currentX = 0,
        currentY = yOffset;

      context.strokeStyle = wave.color;
      context.beginPath(); // Start a new path
      context.moveTo(0, yOffset + wave.getYFromX(0 + xOffset, xOffset)); // Move the pen to (30, 50)

      while (currentX < x - xOffset) {
        //context.fillRect(currentX,yOffset+wave.getYFromX(currentX + xOffset)  ,1,1)
        currentX += step ?? 4;
        currentY = yOffset + wave.getYFromX(currentX + xOffset, xOffset);
        context.lineTo(currentX, currentY);
      }
      context.stroke(); // Render the path
    }

    if (x < context.canvas.width) {
      x += step ?? 4;

      requestAnimationFrame(() => drawWaves(waves, context, x, xOffset));
    } else {
      x += 1;

      xOffset = x - context.canvas.width;

      frameRef.current = requestAnimationFrame(() => drawWaves(waves, context, x, xOffset));
    }
  }
  useEffect(() => {
    if (canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const context = canvas.getContext('2d');
      if (context) {
        frameRef.current = requestAnimationFrame(() =>
          drawWaves(waves, context, startFull ? canvas.width : 0, 0, step),
        );
      }
    }

    return () => cancelAnimationFrame(frameRef.current);
  });

  return <canvas ref={canvasRef} {...{ width, height, ...rest }} />;
};
