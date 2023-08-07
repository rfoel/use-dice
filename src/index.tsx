import { useState } from 'react'

import Dice from './Dice'

export type DiceOptions = {
  timeout?: number
}

export type DiceValue = 1 | 2 | 3 | 4 | 5 | 6

export const getRandomDiceValue = () =>
  Math.floor(Math.random() * 6 + 1) as DiceValue

export default ({ timeout = 0 }: DiceOptions) => {
  const [isRolling, setIsRolling] = useState(false)
  const [value, setValue] = useState<DiceValue | null>(null)

  const roll = () => {
    setIsRolling(true)
    setValue(null)
    new Promise((resolve) => setTimeout(resolve, timeout)).then(() => {
      setValue(getRandomDiceValue())
      setIsRolling(false)
    })
  }

  return { isRolling, value, roll }
}

export { Dice }
