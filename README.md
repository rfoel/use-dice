# 🎲 use-dice

[![NPM version](https://badge.fury.io/js/use-dice.svg)](http://badge.fury.io/js/use-dice)

[![npm](https://nodei.co/npm/use-dice.png)](https://www.npmjs.com/package/use-dice)

> React hook for rolling dices.

## Installation

```sh
npm install use-dice
```

## Usage

```jsx
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
```

## Hook

| Name      | Description                                                        | Default |
| --------- | ------------------------------------------------------------------ | ------- |
| roll      | Function that calls for a random dice value                        |         |
| value     | Last dice rolled value                                             |         |
| isRolling | Returns `true` within the `timeout` option, useful for animations. | false   |

## Options

| Name      | Description                                                        | Default |
| --------- | ------------------------------------------------------------------ | ------- |
| timeout   | Timeout for `roll` function return a value, useful for animations. | 0       |
| isRolling | Returns `true` within the timeout, useful for animations.          | false   |

## Contributing

Issues and pull requests are welcome.

## License

[MIT](https://github.com/rfoell/styled-content-loader/blob/main/LICENSE)
