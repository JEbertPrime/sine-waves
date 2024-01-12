import React, { useRef, useEffect } from 'react';

import { SineWave } from './SineWave';

export const WaveChart = (props: {
  waves: SineWave[];
  startFull?: boolean;
  fullWidth?: boolean;
  height?: number;
  width?: number;
  step?: number;
}) => {
  const { waves, startFull, fullWidth, height = 400, width, step = 4 } = props;

  const canvasRef = useRef();
  const frameRef = useRef(0);

  function drawWaves(waves: SineWave[], context: CanvasRenderingContext2D, x: number, xOffset: number, step?: number) {
    if (context.canvas.width != (fullWidth ? window.innerWidth : window.innerWidth * 0.8)) {
      context.canvas.width = fullWidth ? window.innerWidth : window.innerWidth * 0.8;
    }
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
      canvas.width = width ? width : fullWidth ? window.innerWidth : window.innerWidth * 0.8;
      const context = canvas.getContext('2d');
      if (context) {
        frameRef.current = requestAnimationFrame(() =>
          drawWaves(
            waves,
            context,
            startFull ? (width ? width : fullWidth ? window.innerWidth : window.innerWidth * 0.8) : 0,
            0,
            step,
          ),
        );
      }
    }

    return () => cancelAnimationFrame(frameRef.current);
  });

  return <canvas ref={canvasRef} {...{ width }} height={height} />;
};
