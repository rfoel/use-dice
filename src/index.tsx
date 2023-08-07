import { useState } from 'react'

export type DiceOptions = {
  timeout?: number
}

const getRandomDiceValue = () => Math.floor(Math.random() * 6 + 1)

export default ({ timeout = 0 }: DiceOptions) => {
  const [isRolling, setIsRolling] = useState(false)
  const [value, setValue] = useState<number | null>()

  const roll = () => {
    setIsRolling(true)
    new Promise((resolve) => setTimeout(resolve, timeout)).then(() => {
      setValue(getRandomDiceValue())
      setIsRolling(false)
    })
  }

  return { isRolling, value, roll }
}
