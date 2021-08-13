import React, { useState } from 'react'
import { Alert, Button } from 'reactstrap'

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <Alert>{count}</Alert>
            <Button onClick={() => setCount(count + 1)}>+</Button>
        </>
    )
}

export default Counter
