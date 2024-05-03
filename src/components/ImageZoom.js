import React, { useRef, useState } from "react";
import { urlFor } from "../utils";

const ImageZoom = ({ src, alt }) => {
  const imageRef = useRef();
  const containerRef = useRef();
  const targetRef = useRef();

  const [opacity, setOpacity] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleHover = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition({ x, y });
  };

  return (
    <div
      className="relative w-full h-full"
      onMouseMove={handleHover}
      onMouseEnter={() => {
        setOpacity(1);
      }}
      onMouseLeave={() => {
        setOpacity(0);
      }}
      ref={containerRef}
    >
      <img
        src={urlFor(src)}
        alt={alt}
        ref={imageRef}
        className={`object-cover w-full `}
      />

      <div
        ref={targetRef}
        className="absolute top-0 left-0 w-full h-full duration-100 transition-opacity"
        style={{
          opacity: opacity,
          backgroundImage: `url(${urlFor(src)})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: `${position.x}% ${position.y}% `,
          backgroundSize: "500px",
        }}
      ></div>
    </div>
  );
};

export default ImageZoom;
