'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
  type Variants,
} from 'framer-motion'

export const easeOut = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
}

type RevealProps = {
  children: ReactNode
  variants?: Variants
  delay?: number
  once?: boolean
  amount?: number | 'some' | 'all'
  as?: 'div' | 'section'
  className?: string
}

export function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  once = true,
  amount = 0.2,
  as = 'div',
  className,
}: RevealProps) {
  const reduced = useReducedMotion()
  const Comp = as === 'section' ? motion.section : motion.div

  if (reduced) {
    const Tag = as === 'section' ? 'section' : 'div'
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Comp>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
  variants?: Variants
  once?: boolean
  amount?: number | 'some' | 'all'
}

export function Stagger({
  children,
  className,
  variants = staggerContainer,
  once = true,
  amount = 0.15,
}: StaggerProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  variants = fadeUp,
}: {
  children: ReactNode
  className?: string
  variants?: Variants
}) {
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  )
}

type AnimatedCounterProps = {
  value: number
  suffix?: string
  className?: string
  suffixClassName?: string
}

export function AnimatedCounter({
  value,
  suffix = '',
  className,
  suffixClassName,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })
  const reduced = useReducedMotion()
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, {
    stiffness: 70,
    damping: 22,
  })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (reduced) {
      setDisplay(value)
      return
    }
    if (isInView) motionValue.set(value)
  }, [isInView, value, motionValue, reduced])

  useEffect(() => {
    return spring.on('change', (latest) => {
      setDisplay(Math.round(latest))
    })
  }, [spring])

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}
      {suffix ? <span className={suffixClassName}>{suffix}</span> : null}
    </span>
  )
}
