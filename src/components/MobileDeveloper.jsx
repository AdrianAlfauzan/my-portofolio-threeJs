import React, { useState, useRef } from "react";
import CustomTitle from "./CustomTitle";
import { mobileWorks as initialMobileWorks } from "./data/config";

function DraggableImage({ id, imageUrl, position, rotation, onUpdate }) {
  const elementRef = useRef(null);
  const isDragging = useRef(false);
  const isRotating = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const rotateStart = useRef(0);

  // ──────── DRAG HANDLERS ────────
  const startDrag = (x, y) => {
    const rect = elementRef.current.getBoundingClientRect();
    dragOffset.current = {
      x: x - rect.left,
      y: y - rect.top,
    };
    isDragging.current = true;
  };

  const doDrag = (x, y) => {
    if (!isDragging.current) return;
    const newX = x - dragOffset.current.x;
    const newY = y - dragOffset.current.y;
    onUpdate(id, { x: newX, y: newY });
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    startDrag(e.clientX, e.clientY);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => doDrag(e.clientX, e.clientY);
  const handleMouseUp = () => {
    stopDrag();
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    startDrag(touch.clientX, touch.clientY);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    doDrag(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => {
    stopDrag();
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
  };

  // ──────── ROTATE HANDLERS ────────
  const startRotate = (x) => {
    rotateStart.current = x;
    isRotating.current = true;
  };

  const doRotate = (x) => {
    if (!isRotating.current) return;
    const delta = x - rotateStart.current;
    onUpdate(id, { rotation: rotation + delta });
    rotateStart.current = x;
  };

  const stopRotate = () => {
    isRotating.current = false;
  };

  const handleRotateMouseDown = (e) => {
    e.stopPropagation();
    startRotate(e.clientX);
    window.addEventListener("mousemove", handleRotateMouseMove);
    window.addEventListener("mouseup", handleRotateMouseUp);
  };

  const handleRotateMouseMove = (e) => doRotate(e.clientX);
  const handleRotateMouseUp = () => {
    stopRotate();
    window.removeEventListener("mousemove", handleRotateMouseMove);
    window.removeEventListener("mouseup", handleRotateMouseUp);
  };

  const handleRotateTouchStart = (e) => {
    e.stopPropagation();
    const touch = e.touches[0];
    startRotate(touch.clientX);
    window.addEventListener("touchmove", handleRotateTouchMove);
    window.addEventListener("touchend", handleRotateTouchEnd);
  };

  const handleRotateTouchMove = (e) => {
    const touch = e.touches[0];
    doRotate(touch.clientX);
  };

  const handleRotateTouchEnd = () => {
    stopRotate();
    window.removeEventListener("touchmove", handleRotateTouchMove);
    window.removeEventListener("touchend", handleRotateTouchEnd);
  };

  return (
    <div
      ref={elementRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        transform: `rotate(${rotation}deg)`,
        cursor: "grab",
        userSelect: "none",
        maxWidth: "150px",
        zIndex: 10,
      }}
    >
      <img src={imageUrl} alt={`Mobile app ${id}`} className="w-full h-auto object-contain rounded-md pointer-events-none" draggable={false} />
      <div onMouseDown={handleRotateMouseDown} onTouchStart={handleRotateTouchStart} className="w-4 h-4 bg-blue-500 rounded-full absolute bottom-1 right-1 cursor-pointer" title="Putar" />
    </div>
  );
}

export default function MobileDeveloper() {
  const [items, setItems] = useState(
    initialMobileWorks.map((item, index) => ({
      ...item,
      position: {
        x: 100 + (index % 3) * 200,
        y: 100 + Math.floor(index / 3) * 200,
      },
      rotation: 0,
    }))
  );

  const updateItem = (id, changes) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              position: changes.x !== undefined ? { x: changes.x, y: changes.y } : item.position,
              rotation: changes.rotation !== undefined ? changes.rotation : item.rotation,
            }
          : item
      )
    );
  };

  return (
    <>
      <header className="relative" id="work">
        <CustomTitle title="Mobile Developer" />
      </header>

      <div className="relative w-[90%] h-[90%] mx-auto  overflow-hidden rounded-md">
        {items.map((item) => (
          <DraggableImage key={item.id} id={item.id} imageUrl={item.imageUrl} position={item.position} rotation={item.rotation} onUpdate={updateItem} />
        ))}
      </div>
    </>
  );
}
