{
  const funcString = 'return function* rotate(matrix) {\n  const l = matrix.length;\n  for (let i = 0; i < l; i++) {\n    for (let j = i; j < l; j++) {\n      yield;\n      const temp = matrix[i][j];\n      matrix[i][j] = matrix[j][i];\n      matrix[j][i] = temp;\n    }\n  }\n  for (let i = 0; i < l; i++) {\n    for (let j = 0; j < l / 2; j++) {\n      yield;\n      const temp = matrix[i][j];\n      matrix[i][j] = matrix[i][l - j - 1];\n      matrix[i][l - j - 1] = temp;\n    }\n  }\n}'
  const func = new Function(funcString)()
  console.log(func([[1, 2, 3], [4, 5, 6], [7, 8, 9]]).next().value)
}
