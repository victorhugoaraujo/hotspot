import { useRef, useEffect } from 'react';
import './styles.css';

export default function useHover() {
  const ref = useRef(null);

  const handleMouseOver = () => {
    ref.current.classList.add('hovered');
    const closestParentContainer = ref.current.parentNode.closest('.container');

    if (closestParentContainer) {
      closestParentContainer.classList.remove('hovered');
    }
  };
  const handleMouseOut = () => {
    ref.current.classList.remove('hovered');

    const closestParentContainer = ref.current.parentNode.closest('.container');
    if (closestParentContainer) {
      closestParentContainer.classList.add('hovered');
    }
  };

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseenter', handleMouseOver);
        node.addEventListener('mouseleave', handleMouseOut);

        return () => {
          node.removeEventListener('mouseenter', handleMouseOver);
          node.removeEventListener('mouseleave', handleMouseOut);
        };
      }
    },
    [ref.current]
  );

  return [ref];
}
