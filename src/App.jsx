import React, { useState, useEffect } from  "react"
import FirstKeyPad from "./components/firstKeypad"
import SecondKeyPad from "./components/secondKeypad"
import "./App.css"

function App() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")
  const [isFirstKeypad, setIsFirstKeypad] = useState(true)

    const handleClick = (value) => {
      setInput(input + value)

    }

    const handleEqual = () => {
      try {
        const calculatedResult = eval(input)
        setResult(calculatedResult.toString())
      } catch (error) {
        setResult("----")
      }
    }

    const handleClear = () => {
        setInput("")
        setResult("")
    }

    const handleClickToCopyIntoInput = () => {
      setInput(result)
      // setResult("")
    }

    const changeTosimpleKeyPad = () => {
      setIsFirstKeypad(true)
    }

    const changeTocomplexKeyPad = () => {
      setIsFirstKeypad(false)
    }
  return (
    <div className="App">
      <h2>Calculator</h2>
      <p>input and result display in the grey box</p>
      <main>
        <div className="input-and-result">
          <p>You inputted: {input}</p>
          <p>Your result: {result}</p>
        </div>
        <div className="calc--box">
          <div className="button-group">
            <button onClick={changeTosimpleKeyPad}>
              First Function
            </button>
            <button onClick={changeTocomplexKeyPad}>
              Second Function
            </button>
          </div>
          <div>
            { isFirstKeypad ? 
              <FirstKeyPad 
                handleClear={handleClear}
                handleEqual={handleEqual}
                handleClick={handleClick}
                handleClickToCopyIntoInput={handleClickToCopyIntoInput}
                result={result}
              />
              :
              <SecondKeyPad
                handleClick={handleClick}
              />
            }
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
