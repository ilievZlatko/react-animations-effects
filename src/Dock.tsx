import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

function Dock() {
  let mouseX = useMotionValue(Infinity);

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className='mx-auto flex h-16 items-end gap-4 rounded-2xl bg-slate-700 bg-opacity-20 backdrop-blur-xl border-[1px] px-4 pb-3 drop-shadow-md'
      style={{
        borderColor: 'rgba(255, 255, 255, 0.1)',
      }}
    >
      {[...Array(7).keys()].map((i) => (
        <AppIcon mouseX={mouseX} key={i} />
      ))}
    </div>
  );
}

export default Dock;

function AppIcon({ mouseX }: { mouseX: MotionValue }) {
  let ref = useRef<HTMLDivElement>(null);
  let distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  let widthSync = useTransform(distance, [-100, 0, 100], [40, 80, 40]);
  let width = useSpring(widthSync, { damping: 15, mass: 0.1, stiffness: 200 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className='aspect-square w-10 rounded-full bg-white'
    />
  );
}
