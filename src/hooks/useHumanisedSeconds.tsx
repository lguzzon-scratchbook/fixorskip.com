import {useCallback} from "react"

export const useHumanisedSeconds = () => {
  const formatDuration = useCallback((seconds: number) => {
    const years = Math.floor(seconds / 31536000)
    seconds -= years * 31536000

    const months = Math.floor(seconds / 2592000)
    seconds -= months * 2592000

    const weeks = Math.floor(seconds / 604800)
    seconds -= weeks * 604800

    const days = Math.floor(seconds / 86400)
    seconds -= days * 86400

    const hours = Math.floor(seconds / 3600)
    seconds -= hours * 3600

    const minutes = Math.floor(seconds / 60)
    seconds -= minutes * 60

    const remaining_seconds = Math.floor(seconds)

    let time: string[] = []
    if (years > 0) time.push(years + (years > 1 ? " years" : " year"))
    if (months > 0) time.push(months + (months > 1 ? " months" : " month"))
    if (weeks > 0) time.push(weeks + (weeks > 1 ? " weeks" : " week"))
    if (days > 0) time.push(days + (days > 1 ? " days" : " day"))
    if (hours > 0) time.push(hours + (hours > 1 ? " hours" : " hour"))
    if (minutes > 0) time.push(minutes + (minutes > 1 ? " minutes" : " minute"))
    if (remaining_seconds > 0)
      time.push(
        remaining_seconds + (remaining_seconds > 1 ? " seconds" : " second")
      )

    time = time.slice(0, 2)

    return time.length === 2 ? `${time[0]} and ${time[1]}` : time[0] || ""
  }, [])

  return {formatDuration}
}
