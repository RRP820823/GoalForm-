import React from "react"

export default function GoalForm({ onAdd }) {
  const [formData, setFormData] = React.useState({
    goal: "",
    by: "",
  })

  function handelChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function submitHandler(e) {
    e.preventDefault()
    onAdd(formData)
    setFormData({ goal: "", by: "" })
  }

  return (
    <>
      {JSON.stringify(formData)}
      <h1>My little form </h1>

      <form action="" onSubmit={submitHandler}>
        <input
          onChange={handelChange}
          name="goal"
          type="text"
          placeholder="..goal"
          value={formData.goal}
        />
        <input
          onChange={handelChange}
          name="by"
          type="text"
          placeholder="..by"
          value={formData.by}
        />
        <button type="submit">Submit goal</button>
      </form>
    </>
  )
}
