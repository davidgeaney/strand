import { type MotionValue, useScroll, useTransform } from "framer-motion"

export const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance])
}

export const useSmoothScroll = (ref: React.RefObject<HTMLElement>) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  return scrollYProgress
}

