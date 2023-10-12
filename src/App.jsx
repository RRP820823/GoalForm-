import React from "react"
import "./App.css"
import GoalForm from "./Components/GoalForm"
import ListOfGoals from "./Components/ListOfGoals"

function App() {
  const [allGoals, updateAllGoals] = React.useState([])
  function addGoal(goal) {
    updateAllGoals([...allGoals, goal])
  }
  return (
    <>
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </>
  )
}

export default App
