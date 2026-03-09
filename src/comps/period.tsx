import {useCallback, useEffect, useState} from "react"
import {useDispatch} from "src/state/state"
import {OftenButton, OftenRow, Row, Section} from "./stylesheet.css"

export const Period = () => {
  const [period, setPeriod] = useState<
    "daily" | "weekly" | "monthly" | "yearly"
  >("weekly")
  const [times, setTimes] = useState(5)

  const handlePeriodChange = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setPeriod(
        e.currentTarget.dataset.period as
          | "daily"
          | "weekly"
          | "monthly"
          | "yearly"
      )
    },
    []
  )

  const handleTimesChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTimes(e.target.value)
    },
    []
  )

  const dispatch = useDispatch()

  useEffect(() => {
    const multipliers: Record<typeof period, number> = {
      daily: 365,
      weekly: 365 / 7,
      monthly: 12,
      yearly: 1
    }
    const totalTimes = times * multipliers[period]

    dispatch({type: "SET_RECURRENCE", payload: {tasksPerYear: totalTimes}})
  }, [times, period, dispatch])

  return (
    <div className={Section}>
      <p>How often do you perform this task?</p>
      <div className={Row}>
        <input type="number" value={times} onChange={handleTimesChange} />
        <span>times</span>
      </div>
      <div className={OftenRow}>
        <button
          type="button"
          onClick={handlePeriodChange}
          className={OftenButton({active: period === "daily"})}
          data-period="daily">
          / day
        </button>
        <button
          type="button"
          onClick={handlePeriodChange}
          className={OftenButton({active: period === "weekly"})}
          data-period="weekly">
          / week
        </button>
        <button
          type="button"
          onClick={handlePeriodChange}
          className={OftenButton({active: period === "monthly"})}
          data-period="monthly">
          / month
        </button>
        <button
          type="button"
          onClick={handlePeriodChange}
          className={OftenButton({active: period === "yearly"})}
          data-period="yearly">
          / year
        </button>
      </div>
    </div>
  )
}
