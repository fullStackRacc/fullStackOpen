const Header = ({ course }) => {
  return <h1>{course.name}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
}

const Total = ({ course }) => {
  const sum = course.parts.reduce((acc, c) => acc + c, 0)

  return <h4>Total of {sum} exercises</h4>
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default Course