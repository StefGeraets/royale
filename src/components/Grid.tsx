import React, { CSSProperties, useState, MouseEvent } from 'react'
  

type Props = {
  rows: number, cols: number, cellSize?: number
}

const Grid = ({rows = 24, cols = 24, cellSize = 32}: Props) => {
  const [clickPosition, setClickPosition] = useState({left: 0, top: 0})

  const setRingPosition = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const clickPos = e.currentTarget.getBoundingClientRect();
    const left = (e.clientX - clickPos.left);
    const top = (e.clientY - clickPos.top);
    const correctedLeft = left - (left % cellSize);
    const correctedTop = top - (top % cellSize);
    setClickPosition({left: correctedLeft, top: correctedTop})
  }

  const style = {
    width: `${rows * cellSize}px`,
    height: `${cols * cellSize}px`,
    "--grid-cell-size": `${cellSize}px`
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
    style={style}
    tabIndex={0} 
    onClick={setRingPosition}
    >
      <div className='w-8 h-8 bg-red-600 absolute' style={clickPosition}></div>
    </div>
  )
}

export default Grid


// Display grid with css
// Add seperate element that moves accordingly to grid size
// Set position of rings 