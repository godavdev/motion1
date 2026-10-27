import { motion } from "motion/react"

const persons: { name: string; age: number }[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
  { name: "Eve", age: 45 },
]

const PersonCard = ({
  name,
  age,
  position,
}: {
  name: string
  age: number
  position: number
}) => {
  return (
    <motion.div
      className="bg-white p-4 rounded shadow w-64"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, transition: { delay: position * 0.3 } }}
    >
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Age: {age}</p>
      <p>{position}</p>
    </motion.div>
  )
}

export const App = () => {
  return (
    <div className="flex items-center justify-center flex-col h-dvh gap-4">
      {persons.map((person, index) => (
        <PersonCard
          position={index}
          key={person.name}
          name={person.name}
          age={person.age}
        />
      ))}
    </div>
  )
}
