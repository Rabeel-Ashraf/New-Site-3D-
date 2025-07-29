import { useEffect, useRef, useState } from 'react';

// Custom hook for scroll-triggered animations
export const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    delay = 0
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            if (triggerOnce) {
              setHasAnimated(true);
            }
          }, delay);
        } else if (!triggerOnce && !hasAnimated) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, triggerOnce, delay, hasAnimated]);

  return [elementRef, isVisible];
};

// Staggered animation hook for multiple elements
export const useStaggeredAnimation = (itemCount, options = {}) => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const containerRef = useRef(null);
  
  const {
    threshold = 0.1,
    staggerDelay = 100,
    triggerOnce = true
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate items with stagger effect
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, i]));
            }, i * staggerDelay);
          }
        }
      },
      { threshold }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, [itemCount, staggerDelay, threshold]);

  return [containerRef, visibleItems];
};

// Animation variants
export const animationVariants = {
  // Slide animations
  slideUp: {
    hidden: { opacity: 0, transform: 'translateY(60px)' },
    visible: { opacity: 1, transform: 'translateY(0px)' }
  },
  slideDown: {
    hidden: { opacity: 0, transform: 'translateY(-60px)' },
    visible: { opacity: 1, transform: 'translateY(0px)' }
  },
  slideLeft: {
    hidden: { opacity: 0, transform: 'translateX(60px)' },
    visible: { opacity: 1, transform: 'translateX(0px)' }
  },
  slideRight: {
    hidden: { opacity: 0, transform: 'translateX(-60px)' },
    visible: { opacity: 1, transform: 'translateX(0px)' }
  },

  // Scale animations
  scaleUp: {
    hidden: { opacity: 0, transform: 'scale(0.8)' },
    visible: { opacity: 1, transform: 'scale(1)' }
  },
  scaleDown: {
    hidden: { opacity: 0, transform: 'scale(1.2)' },
    visible: { opacity: 1, transform: 'scale(1)' }
  },

  // Rotation animations
  rotateIn: {
    hidden: { opacity: 0, transform: 'rotate(-10deg) scale(0.9)' },
    visible: { opacity: 1, transform: 'rotate(0deg) scale(1)' }
  },

  // Flip animations
  flipX: {
    hidden: { opacity: 0, transform: 'rotateX(90deg)' },
    visible: { opacity: 1, transform: 'rotateX(0deg)' }
  },
  flipY: {
    hidden: { opacity: 0, transform: 'rotateY(90deg)' },
    visible: { opacity: 1, transform: 'rotateY(0deg)' }
  },

  // Advanced effects
  glowUp: {
    hidden: { 
      opacity: 0, 
      transform: 'translateY(40px)', 
      filter: 'blur(10px) brightness(0.5)' 
    },
    visible: { 
      opacity: 1, 
      transform: 'translateY(0px)', 
      filter: 'blur(0px) brightness(1)' 
    }
  },

  morphIn: {
    hidden: { 
      opacity: 0, 
      transform: 'scale(0.3) rotate(180deg)', 
      borderRadius: '50%' 
    },
    visible: { 
      opacity: 1, 
      transform: 'scale(1) rotate(0deg)', 
      borderRadius: '16px' 
    }
  },

  particles: {
    hidden: { 
      opacity: 0, 
      transform: 'translateY(20px)', 
      filter: 'blur(8px)' 
    },
    visible: { 
      opacity: 1, 
      transform: 'translateY(0px)', 
      filter: 'blur(0px)' 
    }
  }
};

// Animation component wrapper
export const AnimatedElement = ({ 
  children, 
  variant = 'slideUp', 
  duration = 800, 
  delay = 0,
  className = '',
  ...options 
}) => {
  const [ref, isVisible] = useScrollAnimation({ delay, ...options });
  const animation = animationVariants[variant];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        ...(!isVisible ? animation.hidden : animation.visible)
      }}
    >
      {children}
    </div>
  );
};

// Staggered container component
export const StaggeredContainer = ({ 
  children, 
  staggerDelay = 150,
  variant = 'slideUp',
  duration = 600,
  className = '',
  ...options 
}) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  const [containerRef, visibleItems] = useStaggeredAnimation(childrenArray.length, { 
    staggerDelay, 
    ...options 
  });
  const animation = animationVariants[variant];

  return (
    <div ref={containerRef} className={className}>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          style={{
            transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
            ...(visibleItems.has(index) ? animation.visible : animation.hidden)
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};