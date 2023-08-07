import { DiceValue, getRandomDiceValue } from '.'

const Dot = ({
  gridArea,
  isOdd,
  isLast,
}: {
  gridArea: string
  isOdd?: boolean
  isLast?: boolean
}) => (
  <div
    style={{
      gridArea: isOdd && isLast ? 'g' : gridArea,
      backgroundColor: 'black',
      height: '1rem',
      width: '1rem',
      borderRadius: '1rem',
      alignSelf: 'center',
      justifySelf: 'center',
    }}
  />
)

const sides = {
  1: { transform: 'translateZ(3rem)' },
  2: { transform: 'rotateX(-180deg) translateZ(3rem)' },
  3: { transform: 'rotateY(90deg) translateZ(3rem)' },
  4: { transform: 'rotateY(-90deg) translateZ(3rem)' },
  5: { transform: 'rotateX(90deg) translateZ(3rem)' },
  6: { transform: 'rotateX(-90deg) translateZ(3rem)' },
}

const Side = ({ dots }: { dots: DiceValue }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateAreas: '"a . c" "e g f" "d . b"',
      position: 'absolute',
      backgroundColor: 'white',
      width: '100%',
      height: '100%',
      boxShadow: 'inset 0 0 0 1px silver',
      borderRadius: '0.5rem',
      ...sides[dots],
    }}
  >
    {['a', 'b', 'c', 'd', 'e', 'f'].slice(0, dots).map((gridArea, index) => (
      <Dot
        gridArea={gridArea}
        isOdd={(index + 1) % 2 !== 0}
        isLast={index + 1 === dots}
      />
    ))}
  </div>
)

const values = {
  1: { transform: 'rotateX(360deg) rotateY(360deg) rotateZ(720deg)' },
  2: { transform: 'rotateX(360deg) rotateY(540deg) rotateZ(720deg)' },
  3: { transform: 'rotateX(360deg) rotateY(630deg) rotateZ(720deg)' },
  4: { transform: 'rotateX(360deg) rotateY(450deg) rotateZ(720deg)' },
  5: { transform: 'rotateX(630deg) rotateY(360deg) rotateZ(720deg)' },
  6: { transform: 'rotateX(450deg) rotateY(360deg) rotateZ(720deg)' },
}

const rolling = {
  1: { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
  2: { transform: 'rotateX(0deg) rotateY(180deg) rotateZ(0deg)' },
  3: { transform: 'rotateX(0deg) rotateY(270deg) rotateZ(0deg)' },
  4: { transform: 'rotateX(0deg) rotateY(90deg) rotateZ(0deg)' },
  5: { transform: 'rotateX(270deg) rotateY(0deg) rotateZ(0deg)' },
  6: { transform: 'rotateX(90deg) rotateY(0deg) rotateZ(0deg)' },
}

const Dice = ({
  value,
  isRolling,
}: {
  value: DiceValue
  isRolling: boolean
}) => {
  return (
    <div
      style={{
        display: 'block',
        height: '6rem',
        width: '6rem',
        transformStyle: 'preserve-3d',
        transition: 'transform 1s linear',
        ...(value
          ? values[value]
          : isRolling
          ? rolling[getRandomDiceValue()]
          : {}),
      }}
    >
      <Side dots={1} />
      <Side dots={2} />
      <Side dots={3} />
      <Side dots={4} />
      <Side dots={5} />
      <Side dots={6} />
    </div>
  )
}

export default Dice
