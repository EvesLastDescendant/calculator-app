import React from "react"
function SecondKeypad(prop) {
    return (
        <div className="second--keypad">
            <button className="keypad operator quotient" onClick={() => prop.handleClick("%")}>%</button>
            <button className="keypad operator quotient" onClick={() => prop.handleClick("")}>cos</button>
            <button className="keypad operator quotient" onClick={() => prop.handleClick("")}>sin</button>
            <button className="keypad operator quotient" onClick={() => prop.handleClick("")}>tan</button>
            <button className="keypad operator quotient" onClick={() => prop.handleClick("")}>
                <p>x <sup>2</sup></p>
            </button>
            <button className="keypad operator quotient" onClick={() => prop.handleClick("")}>
                <p>x <sup>3</sup></p>
            </button>
            <button className="keypad">
                <p>10<sup>x</sup></p>
            </button>
            <button className="keypad operator quotient" onClick={() => prop.handleClick("")}>secant</button>
            <button className="keypad operator quotient" onClick={() => prop.handleClick("")}>cosecant</button>
            <button className="keypad operator quotient" onClick={() => prop.handleClick("")}>cotan</button>
            <button className="keypad">(</button>
            <button className="keypad">)</button>
            <button className="keypad">x!</button>
            <button className="keypad">
                <p>x<sup>-1</sup></p>
            </button>
        </div>
    )
}

export default SecondKeypad