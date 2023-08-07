# 🎲 use-dice

[![NPM version](https://badge.fury.io/js/use-dice.svg)](http://badge.fury.io/js/use-dice)

[![npm](https://nodei.co/npm/use-dice.png)](https://www.npmjs.com/package/use-dice)

> React hook and optional component for rolling dices.

## Installation

```sh
npm install use-dice
```

## Usage

```jsx
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
```

## Options

| Name    | Description                                                        | Default |
| ------- | ------------------------------------------------------------------ | ------- |
| timeout | Timeout for `roll` function return a value, useful for animations. | 0       |

## Hook

| Name      | Description                                                        | Default |
| --------- | ------------------------------------------------------------------ | ------- |
| roll      | Function that calls for a random dice value                        |         |
| value     | Last dice rolled value                                             |         |
| isRolling | Returns `true` within the `timeout` option, useful for animations. | false   |

## Component

| Name      | Description                                                        | Default |
| --------- | ------------------------------------------------------------------ | ------- |
| value     | Last dice rolled value                                             |         |
| isRolling | Returns `true` within the `timeout` option, useful for animations. | false   |

## Contributing

Issues and pull requests are welcome.

## License

[MIT](https://github.com/rfoell/styled-content-loader/blob/main/LICENSE)
