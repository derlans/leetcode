function oneEditAway(first: string, second: string): boolean {
  const n = first.length
  const m = second.length
  if (n === m) {
    let i = 0
    let flag = true
    while (i < n) {
      if (first[i] === second[i]) {
        i++
        continue
      }
      if (flag) {
        flag = false
        i++
        continue
      }
      return false
    }
    return true
  }
  else if (n === m + 1) {
    return oneInsert(second, first)
  }
  else if (n + 1 === m) {
    return oneInsert(first, second)
  }
  else {
    return false
  }
}

function oneInsert(shorter: string, longer: string) {
  const length1 = shorter.length; const length2 = longer.length
  let index1 = 0; let index2 = 0
  while (index1 < length1 && index2 < length2) {
    if (shorter[index1] === longer[index2])
      index1++

    index2++
    if (index2 - index1 > 1)
      return false
  }
  return true
}
oneEditAway('pale', 'ple')
console.log(oneEditAway('islander', 'slander'))
console.log(oneEditAway('teacher', 'beacher'))
