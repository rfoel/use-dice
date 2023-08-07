import useDice, { Dice } from 'use-dice'

function App() {
  const { isRolling, value, roll } = useDice({ timeout: 1000 })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h1>Dice value: {isRolling ? 'dice is rolling' : value}</h1>
      <Dice value={value} isRolling={isRolling} />
      <button onClick={roll} type="button">
        Roll dice
      </button>
    </div>
  )
}

export default App
