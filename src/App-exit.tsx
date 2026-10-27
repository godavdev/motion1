import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

export const App = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="flex items-center justify-center flex-col h-dvh gap-4">
      <button
        className="bg-blue-500 rounded-md px-2 py-1.5 text-white"
        onClick={() => setShow(!show)}
      >
        Toggle show
      </button>
      <AnimatePresence mode="popLayout">
        {show && (
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            className="bg-white p-4 rounded shadow w-64"
          >
            <h2 className="text-xl font-bold">Hello</h2>
            <p>This is a simple card.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
