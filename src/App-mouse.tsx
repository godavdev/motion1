import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react"
import { useEffect, useState } from "react"

export const App = () => {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 })

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      // console.log("Mouse position:", e.clientX, e.clientY)
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      // setMousePosition({ x: e.clientX, y: e.clientY })
    })

    return () => {
      window.removeEventListener("mousemove", (e) => {
        console.log("Mouse position:", e.clientX, e.clientY)
      })
    }
  }, [])

  return (
    <div className="flex items-center justify-center flex-col h-dvh gap-4">
      <motion.div
        className="fixed size-10 rounded-full bg-amber-500 -translate-x-1/2 -translate-y-1/2"
        // style={{ left: mousePosition.x, top: mousePosition.y }}
        style={{ left: springX, top: springY }}
      ></motion.div>
    </div>
  )
}
