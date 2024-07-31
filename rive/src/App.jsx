import React from 'react';
import { useRive } from '@rive-app/react-canvas';
import './App.css';

export default function App() {
  const { rive, RiveComponent } = useRive({
    src: 'https://cdn.rive.app/animations/vehicles.riv',
    stateMachines: "bumpy",
    autoplay: false,
  });

  return (
    <>
      <RiveComponent
        className="container"
        onMouseEnter={() => rive && rive.play()}
        onMouseLeave={() => rive && rive.pause()}
      />
    </>
  );
}
