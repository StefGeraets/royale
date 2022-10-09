import React from 'react'
import { createArrayFromCellAmount } from '../lib/gridHelpers';
  
export const renderGrid = (rows: number, cols: number) => {
  const gridElements: JSX.Element[] = [];
  let x = 0
  let y = 0

  createArrayFromCellAmount(rows, cols).map((c) => {
    y = c % cols
    
    gridElements.push(GridCell(x, y, `${x}+${y}`))
    if (y === rows - 1) {
      x++
    }
  })

  return gridElements;
}

const GridCell = (x: number, y: number, key?: string) => {
  return (
    <div className={`grid-item grid-item-${x}-${y} border border-gray-900/85`} key={key}></div>
  )
}

type Props = {
  rows: number, cols: number
}

const Grid = (props: Props) => {
  return (
    <div className={`
      grid
      grid-rows-[repeat(${props.rows},_32px)]
      grid-cols-[repeat(${props.cols},_32px)]
      border
      border-gray-900/85
    `}>
      {renderGrid(props.rows, props.cols)}
    </div>
  )
}

export default Grid
