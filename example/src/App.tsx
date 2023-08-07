import useDice from 'use-dice'

function App() {
  const { isRolling, value, roll } = useDice({ timeout: 1000 })

  return (
    <div>
      <h1>Dice value: {isRolling ? 'dice is rolling' : value}</h1>
      <button onClick={roll} type="button">
        Roll dice
      </button>
    </div>
  )
}

export default App
