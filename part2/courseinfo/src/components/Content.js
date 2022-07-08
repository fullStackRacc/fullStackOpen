import Part from "./Part"

const Content = (props) => {
    console.log(props)
    let part1 = props.parts[0]
    let part2 = props.parts[1]
    let part3 = props.parts[2]
    
    return (
        <>
            <Part part={part1} />
            <Part part={part2} />
            <Part part={part3} />
        </>
    )
}

export default Content