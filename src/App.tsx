import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react"

export const App = () => {
  const { scrollYProgress } = useScroll()
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll:", latest)
  })

  const transformedProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const width = useSpring(transformedProgress, { stiffness: 200, damping: 20 })

  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <motion.div
        className="fixed top-0 left-0 bg-purple-400 h-20 w-1/2"
        style={{ width }}
      ></motion.div>
      <div className="w-full max-w-2xl rounded-lg p-4 bg-gray-100 aspect-video h-auto">
        {" "}
      </div>
      <div className="w-full max-w-2xl rounded-lg p-4 bg-gray-100 aspect-video h-auto">
        {" "}
      </div>
      <div className="w-full max-w-2xl rounded-lg p-4 bg-gray-100 aspect-video h-auto">
        {" "}
      </div>
      <div className="w-full max-w-2xl rounded-lg p-4 bg-gray-100 aspect-video h-auto">
        {" "}
      </div>
      <div className="w-full max-w-2xl rounded-lg p-4 bg-gray-100 aspect-video h-auto">
        {" "}
      </div>
      <div className="w-full max-w-2xl rounded-lg p-4 bg-gray-100 aspect-video h-auto">
        {" "}
      </div>
      <div className="w-full max-w-2xl rounded-lg p-4 bg-gray-100 aspect-video h-auto">
        {" "}
      </div>
      <div className="w-full max-w-2xl rounded-lg p-4 bg-gray-100 aspect-video h-auto">
        {" "}
      </div>
      <div className="w-full max-w-2xl rounded-lg p-4 bg-gray-100 aspect-video h-auto">
        {" "}
      </div>
      <div className="w-full max-w-2xl rounded-lg p-4 bg-gray-100 aspect-video h-auto">
        {" "}
      </div>
      <div className="w-full max-w-2xl rounded-lg p-4 bg-gray-100 aspect-video h-auto">
        {" "}
      </div>
      <div className="w-full max-w-2xl rounded-lg p-4 bg-gray-100 aspect-video h-auto">
        {" "}
      </div>
      <div className="w-full max-w-2xl rounded-lg p-4 bg-gray-100 aspect-video h-auto">
        {" "}
      </div>
    </div>
  )
}
