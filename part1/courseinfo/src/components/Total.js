const Total = (props) => {
    let exercises1 = props.parts.parts[0].exercises
    let exercises2 = props.parts.parts[1].exercises
    let exercises3 = props.parts.parts[2].exercises

    return (
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    )
}

export default Total