import React, { useState } from 'react'
import Output from './Output';

const Greetings = () => {
    const [changedText, setChangedText] = useState(false);
    return (
        <div>
            <h2>Hello World</h2>
            {!changedText && <Output>Its good to see you</Output>}
            {changedText && <Output>changed!</Output>}
            <button onClick={() => setChangedText(prevText => {
                return !prevText
            })}>Change Text!</button>
        </div>
    )
}

export default Greetings