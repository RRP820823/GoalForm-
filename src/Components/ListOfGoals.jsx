export default function ListOfGoals({ allGoals }) {
  console.log(allGoals)
  return (
    <ul>
      {allGoals.map((g) => (
        <li key={g.goal}>
          <span>
            My goal is {g.goal} , by {g.by}
          </span>
        </li>
      ))}
    </ul>
  )
}
