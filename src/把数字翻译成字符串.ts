function translateNum(num: number): number {
  const s = num.toString()
  const dp = Array(s.length)
  dp[0] = 1
  for (let i = 1; i < s.length; i++) {
    const v = parseInt(s[i - 1] + s[i])
    dp[i] = dp[i - 1] + ((v < 26 && s[i - 1] !== '0') ? (dp[i - 2] || 1) : 0)
  }
  return dp[s.length - 1]
}
console.log(translateNum(25))
