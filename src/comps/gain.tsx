import {useCallback, useEffect, useState} from "react"
import {useDuration} from "src/hooks/useDuration"
import {useDispatch} from "src/state/state"
import {Section} from "./stylesheet.css"

export const Gain = () => {
  const {getDurationFromString} = useDuration()
  const dispatch = useDispatch()
  const [duration, setDuration] = useState("30 minutes")

  const handleChange = useCallback((e: any) => {
    const elem = e.target || e.currentTarget
    setDuration(elem.value)
  }, [])

  useEffect(() => {
    const seconds = getDurationFromString(duration)

    dispatch({type: "TIME_SAVED_PER_TASK", payload: {seconds}})
  }, [duration, dispatch, getDurationFromString])

  return (
    <div className={Section}>
      <p>How much time per task will the fix save?</p>
      <input
        placeholder="30 minutes"
        value={duration}
        onChange={handleChange}
      />
    </div>
  )
}
