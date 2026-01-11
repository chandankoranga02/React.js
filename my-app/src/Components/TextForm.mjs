import React, { useState } from 'react'


export default function TextForm(props) {


    const [currenttext, NewText] = useState("Enter Text here"); // This means right Now, Currenttext has value of" Enter Text Here"
    const [currentpalidrome, Newpalidrome] = useState([]);

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
        <div style={props.stylemode}>
            <div className='container' >
                
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"  > <h1>Enter Text Below</h1> </label>
                    <textarea value={currenttext} onChange={AfterClick} className="form-control" id="exampleFormControlTextarea1" rows="9" style={props.stylemode}></textarea>
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
