import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import CustomTitle from "./CustomTitle";
import { mobileWorks as initialMobileWorks } from "./data/config";

function DraggableImage({ id, imageUrl, position, rotation, onUpdate, onActivate, isActive }) {
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
    // cegah scroll saat drag
    document.body.style.overflow = "hidden";
  };

  const doDrag = (x, y) => {
    if (!isDragging.current) return;
    const newX = x - dragOffset.current.x;
    const newY = y - dragOffset.current.y;
    onUpdate(id, { x: newX, y: newY });
  };

  const stopDrag = () => {
    isDragging.current = false;
    // kembalikan scroll setelah drag selesai
    document.body.style.overflow = "";
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    onActivate(id);
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
    onActivate(id);
    const touch = e.touches[0];
    startDrag(touch.clientX, touch.clientY);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
  };

  const handleTouchMove = (e) => {
    e.preventDefault(); // cegah scroll saat drag di mobile
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
    document.body.style.overflow = "hidden";
  };

  const doRotate = (x) => {
    if (!isRotating.current) return;
    const delta = x - rotateStart.current;
    onUpdate(id, { rotation: rotation + delta });
    rotateStart.current = x;
  };

  const stopRotate = () => {
    isRotating.current = false;
    document.body.style.overflow = "";
  };

  const handleRotateMouseDown = (e) => {
    e.stopPropagation();
    onActivate(id);
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
    onActivate(id);
    const touch = e.touches[0];
    startRotate(touch.clientX);
    window.addEventListener("touchmove", handleRotateTouchMove, { passive: false });
    window.addEventListener("touchend", handleRotateTouchEnd);
  };

  const handleRotateTouchMove = (e) => {
    e.preventDefault(); // cegah scroll saat rotate di mobile
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
        zIndex: isActive ? 1000 : 10,
        touchAction: "none", // penting supaya touch gesture bisa dikendalikan
      }}
    >
      <img src={imageUrl} alt={`Mobile app ${id}`} className="w-full h-auto object-contain rounded-md pointer-events-none" draggable={false} />
      <div onMouseDown={handleRotateMouseDown} onTouchStart={handleRotateTouchStart} className="w-4 h-4 bg-blue-500 rounded-full absolute bottom-1 right-1 cursor-pointer" title="Putar" />
    </div>
  );
}

export default function MobileDeveloper() {
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const imageSize = 150;

    // Random posisi tapi semua terlihat di viewport
    const getRandomPosition = () => {
      const x = Math.random() * (screenWidth - imageSize);
      const y = Math.random() * (screenHeight - imageSize - 100); // 100 utk header dan padding
      return { x, y };
    };

    const randomized = initialMobileWorks.map((item) => ({
      ...item,
      position: getRandomPosition(),
      rotation: Math.floor(Math.random() * 20 - 10), // random rotasi -10 s/d 10 derajat
    }));

    setItems(randomized);
  }, []);

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

  const handleActivate = (id) => {
    setActiveId(id);
  };

  return (
    <>
      <header className="relative" id="work">
        <CustomTitle title="Mobile Developer" />
      </header>

      <div className="relative w-full h-screen overflow-hidden bg-yellow-500 rounded-md px-2 sm:px-4" style={{ touchAction: "none" }}>
        {items.map((item) => (
          <DraggableImage key={item.id} id={item.id} imageUrl={item.imageUrl} position={item.position} rotation={item.rotation} onUpdate={updateItem} onActivate={handleActivate} isActive={item.id === activeId} />
        ))}
      </div>
    </>
  );
}

DraggableImage.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  imageUrl: PropTypes.string.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  rotation: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onActivate: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
