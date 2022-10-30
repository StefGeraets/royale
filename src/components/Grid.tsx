import React, { CSSProperties, useState, MouseEvent } from 'react'
import MouseRing from './MouseRing';
  

type Props = {
  rows: number, cols: number, cellSize?: number
}

const CIRCLE_SIZE = 20;

const Grid = ({rows = 24, cols = 24, cellSize = 32}: Props) => {
  const [clickPosition, setClickPosition] = useState({left: 0, top: 0})
  const [movePosition, setMovePosition] = useState({left: 0, top: 0})
  const [ringVisible, setRingVisible] = useState(false)

  const setRingPosition = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const clickPos = e.currentTarget.getBoundingClientRect();
    const left = (e.clientX - clickPos.left);
    const top = (e.clientY - clickPos.top);
    const correctedLeft = left - (left % cellSize);
    const correctedTop = top - (top % cellSize);
    setClickPosition({left: correctedLeft, top: correctedTop})
  }

  const moveRingPosition = (e: MouseEvent<HTMLElement>) => {
    const left = (e.clientX - e.currentTarget.offsetLeft) - ((CIRCLE_SIZE * cellSize) / 2);
    const top = (e.clientY - e.currentTarget.offsetTop) - ((CIRCLE_SIZE * cellSize) / 2);
    setMovePosition({left, top})
  }

  const startTrackingRingPosition = () => {
    setRingVisible(true)
  }
  const stopTrackingRingPosition = () => {
    setRingVisible(false)
  }

  const gridStyle = {
    width: `${rows * cellSize}px`,
    height: `${cols * cellSize}px`,
    "--grid-cell-size": `${cellSize}px`
  } as CSSProperties

  const ringStyles = {
    ...movePosition,
    opacity: `${ringVisible ? '1' : '0'}`,
    transition: "opacity 500ms ease",
    width: `${CIRCLE_SIZE * cellSize}px`,
    height: `${CIRCLE_SIZE * cellSize}px`,
    pointerEvents: "none"
  } as CSSProperties

  return (
    <div className={`
      block
      border
      border-gray-900/85
      map-grid
      relative
      focus-visible:outline-none
    `}
    style={gridStyle}
    tabIndex={0} 
    onClick={setRingPosition}
    onMouseMove={moveRingPosition}
    onMouseEnter={startTrackingRingPosition}
    onMouseLeave={stopTrackingRingPosition}
    >
      <div className='w-8 h-8 bg-red-600 absolute teamDot' style={clickPosition}></div>
      <MouseRing styles={ringStyles} />
    </div>
  )
}

export default Grid


// Display grid with css
// Add seperate element that moves accordingly to grid size
// Set position of rings 