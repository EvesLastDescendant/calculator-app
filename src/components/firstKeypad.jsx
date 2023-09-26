import React from "react"

function FirstKeyPad(prop) {
    return (
        <div className="keypad--box">
            {/* <button className="keypad clear" onClick={prop.handleClear}>AC</button> */}
            <input type="button" value="AC" className="keypad clear" onClick={prop.handleClear}/>

            {/* <button className="keypad operator plus-minus" onClick={() => prop.handleClick("+-")}>+/-</button> */}
            <input type="button" value="ANS" className="keypad operator plus-minus" onClick={prop.handleClickToCopyIntoInput}/>

            {/* <button className="keypad operator modulus" onClick={() => prop.handleClick("%")}>%</button> */}
            <input type="button" value="%" className="keypad operator modulus" onClick={() => prop.handleClick("%")}/>

            {/* <button className="keypad operator division" onClick={() => prop.handleClick("/")}>÷</button> */}
            <input type="button" value="÷" className="keypad operator division" onClick={() => prop.handleClick("/")}/>

            {/* <button className="keypad digit seven" onClick={() => prop.handleClick("7")}>7</button> */}
            <input type="button" value="7" className="keypad digit seven" onClick={() => prop.handleClick("7")}/>

            {/* <button className="keypad digit eight" onClick={() => prop.handleClick("8")}>8</button> */}
            <input type="button" value="8" className="keypad digit eight" onClick={() => prop.handleClick("8")}/>

            {/* <button className="keypad digit nine" onClick={() => prop.handleClick("9")}>9</button> */}
            <input type="button" value="9" className="keypad digit nine" onClick={() => prop.handleClick("9")}/>

            {/* <button className="keypad operator times" onClick={() => prop.handleClick("*")}>x</button> */}
            <input type="button" value="x" className="keypad operator times" onClick={() => prop.handleClick("*")}/>

            {/* <button className="keypad digit four" onClick={() => prop.handleClick("4")}>4</button> */}
            <input type="button" value="4" className="keypad digit four" onClick={() => prop.handleClick("4")}/>

            {/* <button className="keypad digit five" onClick={() => prop.handleClick("5")}>5</button> */}
            <input type="button" value="5" className="keypad digit five" onClick={() => prop.handleClick("5")}/>

            {/* <button className="keypad digit six" onClick={() => prop.handleClick("6")}>6</button> */}
            <input type="button" value="6" className="keypad digit six" onClick={() => prop.handleClick("6")}/>

            {/* <button className="keypad operator minus" onClick={() => prop.handleClick("-")}>-</button> */}
            <input type="button" value="-" className="keypad operator minus" onClick={() => prop.handleClick("-")}/>

            {/* <button className="keypad digit one" onClick={() => prop.handleClick("1")}>1</button> */}
            <input type="button" value="1" className="keypad digit one" onClick={() => prop.handleClick("1")}/>

            {/* <button className="keypad digit two" onClick={() => prop.handleClick("2")}>2</button> */}
            <input type="button" value="2" className="keypad digit two" onClick={() => prop.handleClick("2")}/>

            {/* <button className="keypad digit three" onClick={() => prop.handleClick("3")}>3</button> */}
            <input type="button" value="3" className="keypad digit three" onClick={() => prop.handleClick("3")}/>

            {/* <button className="keypad plus" onClick={() => prop.handleClick("+")}>+</button> */}
            <input type="button" value="+" className="keypad plus" onClick={() => prop.handleClick("+")}/>

            {/* <button className="keypad digit zero" onClick={() => prop.handleClick("0")}>0</button> */}
            <input type="button" value="0" className="keypad digit zero" onClick={() => prop.handleClick("0")}/>

            {/* <button className="keypad digit decimal" onClick={() => prop.handleClick(".")}>.</button> */}
            <input type="button" value="." className="keypad digit decimal" onClick={() => prop.handleClick(".")}/>

            {/* <button className="keypad equals" onClick={prop.handleEqual}>=</button> */}
            <input type="button" value="=" className="keypad equals" onClick={prop.handleEqual}/>

        </div>
    )
}
export default FirstKeyPad