import { useState } from 'react'

const Statistics = (props) => {
  const {good, neutral, bad, allClicks} = props

  if (allClicks.length === 0) {
    return(
      <>
        <h2>Statistics:</h2>
        <p>the app is used by pressing the buttons :0</p>
      </>
    )
  } 
  else {
    return (
      <>
        <h2>Statistics:</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Average Score: {(good * 1) + (neutral * 0) + (bad * -1)}</p>
        <p>Percent Positive: {(good / (good + neutral + bad)) * 100}</p>
      </>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  return (
    <div>
      <h2>Give Feedback</h2>
      <button onClick={() => {
        setAll(allClicks.concat('G'))
        setGood(good + 1)}
      }>good</button>
      <button onClick={() => {
        setAll(allClicks.concat('N'))
        setNeutral(neutral + 1)}
      }>neutral</button>
      <button onClick={() => {
        setAll(allClicks.concat('B'))
        setBad(bad + 1)}
      }>bad</button>
      <hr />
      <Statistics 
        good = {good}
        neutral = {neutral}
        bad = {bad}
        allClicks = {allClicks}
      />
    </div>
  )
}

export default App