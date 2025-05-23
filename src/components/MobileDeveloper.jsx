import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import CustomTitle from "./CustomTitle";
import { mobileWorks as initialMobileWorks } from "./data/config";

function DraggableImage({ id, imageUrl, position, rotation, onUpdate, onActivate, isActive, setDragging }) {
  const elementRef = useRef(null);
  const isDragging = useRef(false);
  const isRotating = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const rotateStart = useRef(0);

  // Fungsi baru: pindahkan gambar sehingga titik sentuh ada di tengah gambar
  const moveToTouchCenter = (xTouch, yTouch) => {
    const el = elementRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const newX = xTouch - width / 2;
    const newY = yTouch - height / 2;

    onUpdate(id, { x: newX, y: newY });
    return { newX, newY };
  };

  // DRAG HANDLERS
  const startDrag = (x, y) => {
    const rect = elementRef.current.getBoundingClientRect();
    dragOffset.current = {
      x: x - rect.left,
      y: y - rect.top,
    };
    isDragging.current = true;
    setDragging(true);
  };

  const doDrag = (x, y) => {
    if (!isDragging.current) return;
    const newX = x - dragOffset.current.x;
    const newY = y - dragOffset.current.y;
    onUpdate(id, { x: newX, y: newY });
  };

  const stopDrag = () => {
    isDragging.current = false;
    setDragging(false);
  };

  // Mouse events
  const handleMouseDown = (e) => {
    e.preventDefault();
    onActivate(id);

    const el = elementRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Langsung set dragOffset ke tengah gambar
    dragOffset.current = {
      x: width / 2,
      y: height / 2,
    };

    // Pindahkan gambar ke posisi mouse (tengah)
    onUpdate(id, {
      x: e.clientX - width / 2,
      y: e.clientY - height / 2,
    });

    // Mulai drag
    isDragging.current = true;
    setDragging(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => doDrag(e.clientX, e.clientY);
  const handleMouseUp = () => {
    stopDrag();
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  // Touch events (diubah sesuai request)
  const handleTouchStart = (e) => {
    e.preventDefault();
    onActivate(id);
    const touch = e.touches[0];

    moveToTouchCenter(touch.clientX, touch.clientY);
    setTimeout(() => startDrag(touch.clientX, touch.clientY), 0);

    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    doDrag(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => {
    stopDrag();
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
  };

  // ROTATE HANDLERS
  const startRotate = (x) => {
    rotateStart.current = x;
    isRotating.current = true;
    setDragging(true);
  };

  const doRotate = (x) => {
    if (!isRotating.current) return;
    const delta = x - rotateStart.current;
    onUpdate(id, { rotation: rotation + delta });
    rotateStart.current = x;
  };

  const stopRotate = () => {
    isRotating.current = false;
    setDragging(false);
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
    e.preventDefault();
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
        touchAction: "none",
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
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const imageSize = 150;

    const getRandomPosition = () => {
      const x = Math.random() * (screenWidth - imageSize);
      const y = Math.random() * (screenHeight - imageSize - 100);
      return { x, y };
    };

    const randomized = initialMobileWorks.map((item) => ({
      ...item,
      position: getRandomPosition(),
      rotation: Math.floor(Math.random() * 20 - 10),
    }));

    setItems(randomized);
  }, []);

  useEffect(() => {
    if (dragging) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [dragging]);

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

      <div className="relative w-full h-screen my-10 rounded-md px-2 sm:px-4 overflow-hidden" style={{ touchAction: "auto" }}>
        {items.map((item) => (
          <DraggableImage key={item.id} id={item.id} imageUrl={item.imageUrl} position={item.position} rotation={item.rotation} onUpdate={updateItem} onActivate={handleActivate} isActive={item.id === activeId} setDragging={setDragging} />
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
  setDragging: PropTypes.func.isRequired,
};
