// AnimatedDots.js
import React, { useEffect } from 'react';
import './animateddots.css';

const AnimatedDots = ({ className }) => {
  useEffect(() => {
    const container = document.querySelector(`.${className}`);
    const dotCount = 100;
    const dots = [];

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      container.appendChild(dot);

      const startX = Math.random() * 100;
      const startY = Math.random() * 100;

      dot.style.left = `${startX}%`;
      dot.style.top = `${startY}%`;

      dots.push({
        element: dot,
        deltaX: (Math.random() * 2 - 1) * 0.2,  // Slow down movement speed
        deltaY: (Math.random() * 2 - 1) * 0.2,  // Slow down movement speed
        rotate: Math.random() * 360,
        rotationSpeed: (Math.random() * 2 - 1) * 0.1,  // Slow down rotation speed
        x: startX / 100 * container.clientWidth,
        y: startY / 100 * container.clientHeight,
      });
    }

    const animate = () => {
      dots.forEach(dot => {
        const { element, deltaX, deltaY, rotationSpeed, x, y } = dot;
        const containerRect = container.getBoundingClientRect();

        dot.x += deltaX;
        dot.y += deltaY;
        dot.rotate += rotationSpeed;

        if (dot.x < 0 || dot.x > containerRect.width) {
          dot.deltaX *= -1;
        }
        if (dot.y < 0 || dot.y > containerRect.height) {
          dot.deltaY *= -1;
        }

        element.style.transform = `translate(${dot.x}px, ${dot.y}px) rotate(${dot.rotate}deg)`;
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      dots.forEach(dot => container.removeChild(dot.element));
    };
  }, [className]);

  return <div className={`container ${className}`}>
    
  </div>;
};

export default AnimatedDots;
