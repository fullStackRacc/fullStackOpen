import { useState } from 'react'

const StatisticLine = ({ button, text }) => {
  return (
    <p>{text} {button}</p>
  )
}

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
        <StatisticLine button={good} text="Good:" />
        <StatisticLine button={neutral} text="Neutral:" />
        <StatisticLine button={bad} text="Bad:" />
        <StatisticLine button={(good * 1) + (neutral * 0) + (bad * -1)} text="Average Score:" />
        <StatisticLine button={(good / (good + neutral + bad)) * 100} text="Percent Positive:" />
      </>
    )
  }
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    setAll(allClicks.concat('G'))
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat('N'))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks.concat('B'))
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
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