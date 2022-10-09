export const createArrayFromCellAmount = (rows: number, cols: number): number[] =>
  Array.from(Array(rows * cols).keys())