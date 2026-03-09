import {useMemo} from "react"
import {Gain} from "src/comps/gain"
import {ReferenceDate} from "src/comps/interval"
import {Period} from "src/comps/period"
import {Aside, Main, ResultGroup} from "src/comps/stylesheet.css"
import {useHumanisedSeconds} from "src/hooks/useHumanisedSeconds"
import {useState} from "src/state/state"

export const Index = () => {
  const state = useState()

  const {formatDuration} = useHumanisedSeconds()
  const period = useMemo(() => {
    const years = state.deadlineFromNowIn / (365 * 24 * 3600)
    const tasks = years * state.tasksPerYear
    return formatDuration(tasks * state.timeSavedPerTask)
  }, [state, formatDuration])

  return (
    <main className={Main}>
      <aside className={Aside}>
        <Period />
        <Gain />
        <ReferenceDate />
      </aside>
      <div className={ResultGroup}>
        <h2>{period}</h2>
        <p>Only fix if you can get it done in this time frame, or less.</p>
      </div>
      <footer>
        <p>
          Inspired by{" "}
          <a
            target="_blank"
            rel="noopener norefferer"
            href="https://www.linkedin.com/posts/raymond-y-xu_software-ai-engineering-activity-7233495844258205696-FcpO">
            Raymond Xu
          </a>
          's LinkedIn post and{" "}
          <a
            target="_blank"
            rel="noopener norefferer"
            href="https://xkcd.com/1205/">
            XKCD 1205
          </a>
          . Made by{" "}
          <a
            href="https://github.com/teodorraul"
            target="_blank"
            rel="noopener norefferer">
            @teodorraul
          </a>
          , remastered by{" "}
          <a
            href="https://github.com/lguzzon"
            target="_blank"
            rel="noopener norefferer">
            @lguzzon
          </a>
          .
        </p>
        {/* <Logo /> */}
      </footer>
    </main>
  )
}
