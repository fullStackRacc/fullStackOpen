const Total = (props) => {
    let exercises1 = props.parts[0].exercises
    let exercises2 = props.parts[1].exercises
    let exercises3 = props.parts[2].exercises
    let exercisesArr = [exercises1, exercises2, exercises3]

    return (
        <p>Number of exercises {exercisesArr.reduce((acc, c) => acc + c, 0)}</p>
    )
}

export default Total