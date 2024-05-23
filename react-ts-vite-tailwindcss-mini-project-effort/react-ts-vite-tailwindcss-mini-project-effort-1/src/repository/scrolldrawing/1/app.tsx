import React, { useRef, useEffect } from 'react';

const CustomApp = () => {
  return (
    <>
      <DrawingCanvas width={800} height={600} />
    </>
  )
}

export default CustomApp

interface DrawingCanvasProps {
    width: number;
    height: number;
  }
  

  const DrawingCanvas: React.FC<DrawingCanvasProps> = ({ width, height }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
  
      if (ctx) {
        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;
  
        const draw = (e: MouseEvent) => {
          if (!isDrawing || !ctx) return;
  
          ctx.strokeStyle = '#000'; // black color
          ctx.lineJoin = 'round';
          ctx.lineCap = 'round';
          ctx.lineWidth = 5;
  
          ctx.beginPath();
          ctx.moveTo(lastX, lastY);
          ctx.lineTo(e.offsetX, e.offsetY);
          ctx.stroke();
          [lastX, lastY] = [e.offsetX, e.offsetY];
        };
  
        canvas?.addEventListener('mousedown', (e) => {
          isDrawing = true;
          [lastX, lastY] = [e.offsetX, e.offsetY];
        });
  
        canvas?.addEventListener('mousemove', draw);
        canvas?.addEventListener('mouseup', () => (isDrawing = false));
        canvas?.addEventListener('mouseout', () => (isDrawing = false));
      }
    }, []);
  
    const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
      e.preventDefault();
      const deltaY = e.deltaY;
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.scrollTop += deltaY;
      }
    };
  
    return (
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ border: '1px solid black', overflow: 'auto' }}
        onWheel={handleWheel}
      ></canvas>
    );
  };