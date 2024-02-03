import { useState } from "react"

export default function Counter() {
    const [value, setValue] = useState(0)
    function add() {
        alert("add ho raha hai")
        setValue(value + 1)
    }

    function less() {
        alert("add ho raha hai")
        setValue(value - 1)
    }
    return (
        <>
            <h1>Main hun Counter: {value}</h1>
            <button onClick={add}>Add</button>
            <button onClick={less}>Less</button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>{value}</h1>

        </>
    )
}