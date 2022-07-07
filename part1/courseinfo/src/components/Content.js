import Part from "./Part"

const Content = (props) => {
    let part1 = props.parts.parts[0]
    let part2 = props.parts.parts[1]
    let part3 = props.parts.parts[2]
    
    return (
        <>
            <Part part={part1} />
            <Part part={part2} />
            <Part part={part3} />
        </>
    )
}

export default Content