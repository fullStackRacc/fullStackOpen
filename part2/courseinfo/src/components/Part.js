const Part = (props) => {
    let name = props.part.name
    let exercises = props.part.exercises

    return (
    <p>
        {name} {exercises}
    </p>
    )
}

export default Part