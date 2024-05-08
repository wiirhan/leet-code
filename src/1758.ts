function minOperations(s: string): number {
  const normalCount = normalOperations(s)
  const count = s.length - normalCount
  return normalCount > count ? count : normalCount
}

function normalOperations(s: string) {
  const list = s.split('')
  let count = 0
  for (let i = 1; i < list.length; i++) {
    const element = list[i]
    if (element === list[i - 1]) {
      count++
      if (isZero(element))
        list[i] = '1'

      else
        list[i] = '0'
    }
  }
  return count
}

function isZero(s: string) {
  return !Number(s)
}

export default minOperations
