import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = (props) => {
    const header = props.course.name
    console.log(props.course.parts)
    return (
        <>
            <Header name={header} />
            <Content parts={props.course.parts} />
            <Total parts={props.course.parts} />
        </>
    )
}

export default Course