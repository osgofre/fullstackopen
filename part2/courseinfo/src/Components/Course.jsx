import { Content } from "./Content"
import { Header } from "./Header"
import { Total } from "./Total"

export const Course = ({course}) => {
    const total = course.parts.reduce((sum,part) => sum + part.exercises, 0)
    return (
        <div className="course">
            <Header text={course.name}/>
            <Content parts={course.parts}/>
            <Total total={total} />
        </div>
    )
}