/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const x0: Record<number, boolean> = {}
  const x1: Record<number, boolean> = {}
  const w = matrix.length
  const h = matrix[0].length
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      if (matrix[i][j] === 0) {
        x0[i] = true
        x1[j] = true
      }
    }
  }
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      if (x0[i] || x1[j])
        matrix[i][j] = 0
    }
  }
}

setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]])
