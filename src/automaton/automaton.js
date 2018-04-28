let pattern = [
  {
    pattern: '1 1 1',
    state: 0
  },
  {
    pattern: '1 1 0',
    state: 0
  },
  {
    pattern: '1 0 1',
    state: 0
  },
  {
    pattern: '1 0 0',
    state: 0
  },
  {
    pattern: '0 1 1',
    state: 0
  },
  {
    pattern: '0 1 0',
    state: 0
  },
  {
    pattern: '0 0 1',
    state: 0
  },
  {
    pattern: '0 0 0',
    state: 0
  }
]

export function getPattern (number) {
  pattern = pattern.map(pt => { return { state: 0, pattern: pt.pattern } })
  const arr = number.toString(2).split("").reverse()
  const new_pattern = pattern.slice().reverse().map((pat, i) => {
    if (arr[i] === "1")
      pat.state = 1
    return pat
  })
  return new_pattern
}
