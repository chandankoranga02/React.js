import React, { useState } from 'react'
import props from 'react'

export default function TextForm() {


    const [currenttext, NewText] = useState("Enter Text here"); // This means right Now, Currenttext has value of" Enter Text Here"
    const [currentpalidrome, Newpalidrome] = useState([]);
    const [btnText, changeText] = useState("Enable Dark Mode");



    let [currentMode, modeChange] = useState({
        color: 'black',
        backgroundColor: 'white',
    });

    let togglebutton = () => {
        if (currentMode.color === 'black') {
            modeChange({
                color: 'white',
                backgroundColor: 'black'

            })
            changeText("Enable Light mode");
            document.body.style.backgroundColor = "black"
        }

        else {
            modeChange({
                color: 'black',
                backgroundColor: 'white'

            })
            changeText("Enable Dark mode");
            document.body.style.backgroundColor = "white"
            
        }
    }


    let BeforeClickUpper = () => {
        console.log(" Upper case Button");
        let UppercaseText = currenttext.toUpperCase();
        NewText(UppercaseText);
    }

    let palindromeString = [];
    const palindromeCounter = () => {
        let words = currenttext.split(" ");

        for (let i = 0; i < words.length; i++) {
            let reversed = words[i].split("").reverse().join("");
            if (words[i] === reversed && reversed.length > 1) { palindromeString.push(words[i]); }
        }

        Newpalidrome(palindromeString);
    }


    let BeforeClickLower = () => {
        console.log("Lower case Button");
        let LowercaseText = currenttext.toLowerCase();
        NewText(LowercaseText);
    }

    let AfterClick = (event) => {
        console.log("User is typing ");
        NewText(event.target.value);
    }

    return (
        <div style={currentMode}>
            <div className='container' >
                <button type="button" className={`btn btn-${currentMode.backgroundColor === 'black' ? 'light' : 'dark' } my-5`} onClick={togglebutton} > {btnText} </button>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"  > <h1>Enter Text Below</h1> </label>
                    <textarea value={currenttext} onChange={AfterClick} className="form-control" id="exampleFormControlTextarea1" rows="9" style={currentMode}></textarea>
                </div>
            </div>
            <button type="button" className="btn btn-primary mx-3" onClick={BeforeClickUpper}>To UpperCase </button>
            <button type="button" className="btn btn-secondary mx-3" onClick={BeforeClickLower}>To LowerCase </button>
            <button type="button" className="btn btn-warning" onClick={palindromeCounter}> Palidrome Counter </button>

            <div>
                <h1 className='my-3' > Meaured Data </h1>
                <p>The Number of Words is {currenttext.split(" ").length}</p>
                <p>The Number charactors is  {currenttext.length}</p>
                <p>All the Palidrome words are : {currentpalidrome.join(", ")}</p>
            </div>

        </div>
    )
}
