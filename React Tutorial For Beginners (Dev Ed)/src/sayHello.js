import React from "react"

export default function Hello() {
    function sayHello() {
        console.log("Hello")
    }

    return (
        <div>
            <button onClick={sayHello}>Say Hello</button>
        </div>
    )
}