import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
        <p> Count: {count} </p>
        </div>
    )

}
export default Counter