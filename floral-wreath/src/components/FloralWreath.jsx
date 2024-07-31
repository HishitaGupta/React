// src/components/FloralWreath.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './FloralWreath.css';
import Wreath  from "./Wreath"

const FloralWreath = () => {
  const wreathRef = useRef(null);

  useEffect(() => {
    const wreathElement = wreathRef.current;

    // Jump animation
    gsap.fromTo(
      wreathElement,
      { y: 0 },
      {
        y: -50,
        duration: 0.5,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      }
    );

    // Rolling animation
    gsap.to(wreathElement, {
      rotate: 360,
      duration: 2,
      ease: 'linear',
      repeat: -1,
    });
  }, []);

  return (
    <div className="floral-wreath-container">
      <Wreath ref={wreathRef} className="floral-wreath" />
      <h1 className="wreath-text">Your Text Here</h1>
    </div>
  );
};

export default FloralWreath;
