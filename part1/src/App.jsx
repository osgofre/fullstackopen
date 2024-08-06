import { useState } from 'react'


const StatisticLine = ({text, value}) => <p>{text} {value}</p>


const Statistics = ({ good, neutral, bad, all, average, positive, handleClickGood, handleClickNeutral, handleClickBad }) => {
  return (
    <div className='statistics'>
      <h1>give feedback</h1>

      <button onClick={handleClickGood}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>bad</button>

      <h1>statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={`${positive} %`} />
    </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good+neutral+bad
  const average = all != 0 ? (good-bad)/all : 0
  const positive = all != 0 ? (good)/all * 100 : 0

  const handleClickGood = () => setGood(good+1)
  const handleClickNeutral = () => setNeutral(neutral+1)
  const handleClickBad = () => setBad(bad+1)


  return (
    <div>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
        handleClickGood={handleClickGood}
        handleClickNeutral={handleClickNeutral}
        handleClickBad={handleClickBad}
      />
    </div>
  )
}

export default App