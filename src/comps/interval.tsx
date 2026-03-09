import {useCallback, useEffect, useState} from "react"
import {useDuration} from "src/hooks/useDuration"
import {useDispatch} from "src/state/state"
import {PeriodButton, PeriodButtonGrid, Section} from "./stylesheet.css"

const periods = [
  "1 week",
  "1 month",
  "2 months",
  "3 months",
  "6 months",
  "9 months",
  "1 year",
  "2 years 6 months",
  "5 years",
  "10 years"
]
export const ReferenceDate = () => {
  const {getDurationFromString} = useDuration()
  const dispatch = useDispatch()
  const [duration, setDuration] = useState("5 years")

  const handleChange = useCallback((e: any) => {
    const elem = e.target || e.currentTarget
    setDuration(elem.value)
  }, [])

  useEffect(() => {
    const seconds = getDurationFromString(duration)

    dispatch({type: "DEADLINE_FROM_NOW_IN", payload: {seconds}})
  }, [duration, dispatch, getDurationFromString])

  const handleDurationClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setDuration(e.currentTarget.dataset.period as string)
    },
    []
  )

  return (
    <div className={Section}>
      <p>How long will this task be performed?</p>
      <input value={duration} onChange={handleChange} />
      <div className={PeriodButtonGrid}>
        {periods.map(p => {
          return (
            <button
              data-period={p}
              className={PeriodButton({active: p === duration})}
              onClick={handleDurationClick}>
              {p}
            </button>
          )
        })}
      </div>
    </div>
  )
}
