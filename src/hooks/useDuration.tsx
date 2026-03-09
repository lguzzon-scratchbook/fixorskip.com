import {useCallback} from "react"

const durToSec = [
  {
    suffix: ["years", "year", "yr", "yrs", "y"],
    func: (n: number) => n * 3600 * 24 * 365
  },
  {
    suffix: ["months", "month", "mon", "mth", "mt", "mo"],
    func: (n: number) => n * 3600 * 24 * 30
  },
  {
    suffix: ["weeks", "week", "wks", "wk", "w"],
    func: (n: number) => n * 3600 * 24 * 7
  },
  {suffix: ["days", "day", "da", "d"], func: (n: number) => n * 3600 * 24},
  {suffix: ["hours", "hour", "ho", "h"], func: (n: number) => n * 3600},
  {
    suffix: ["minutes", "minute", "mins", "min", "m"],
    func: (n: number) => n * 60
  },
  {suffix: ["seconds", "second", "sec", "s"], func: (n: number) => n}
]

function parseDuration(arr: [number?, string?][]): number {
  let sum = 0
  for (const a of arr) {
    if (!a) continue
    for (const d of durToSec) {
      if (a[1] && d.suffix.includes(a[1])) {
        sum += a[0] ? d.func(a[0]) : 0
      }
    }
  }
  return sum
}

function splitDuration(duration: string): Array<[number?, string?]> {
  const num = duration.match(/\d+/g)?.map(Number)
  const alpha = duration.match(/[a-zA-Z]+/g)
  const pairs = num?.map((n, i) => [n, alpha?.[i]])

  return (pairs as any) || []
}

export const useDuration = () => {
  const getDurationFromString = useCallback((str: string) => {
    const splits = splitDuration(str)
    return parseDuration(splits)
  }, [])

  return {getDurationFromString}
}
