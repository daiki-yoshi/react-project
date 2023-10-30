import React, { useState } from 'react';

export default function App() {
    const [showStory, setShowStory] = useState(false);
    const [xItem, setXItem] = useState("");
    const [yItem, setYItem] = useState("");
    const [zItem, setZItem] = useState("");
    const [name, setName] = useState("");
    const [unit, setUnit] = useState("us"); 

    function randomValueFromArray(array){
        const random = Math.floor(Math.random()*array.length);
        return array[random];
    }

    function generateRandomStory (){
        const xItems = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
        const yItems = ["the soup kitchen", "Disneyland", "the White House"];
        const zItems = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
        const selectXItem = randomValueFromArray(xItems);
        const selectYItem = randomValueFromArray(yItems);
        const selectZItem = randomValueFromArray(zItems);

        setXItem(selectXItem); 
        setYItem(selectYItem); 
        setZItem(selectZItem); 
        setShowStory(true);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleUnitChange = (e) => {
        setUnit(e.target.value);
    };

    return (
        <>
            <div>
                <label htmlFor="customname">Enter custom name:</label>
                <input 
                    type="text" 
                    placeholder=""
                    onChange={handleNameChange}
                />
            </div>
            <div>
                <label htmlFor="us">US</label>
                <input 
                    type="radio" 
                    value="us" 
                    checked={unit === "us"}
                    onChange={handleUnitChange}
                />
                <label htmlFor="uk">UK</label>
                <input 
                    type="radio" 
                    value="uk" 
                    checked={unit === "uk"}
                    onChange={handleUnitChange}
                />
            </div>
            <div>
                <button onClick={generateRandomStory}>Generate random story</button>
            </div>
            {showStory && (
                <p>
                    It was {unit === 'us' ? "94 Fahrenheit" : "34 Celsius"} outside, so {xItem} went for a walk. When they
                    got to {yItem}, they stared in horror for a few moments, then {zItem}.
                    {name || "Bob"} saw the whole thing, but was not surprised — {xItem} weighs {unit === 'us' ? "300 pounds" : `21 stones`}, and it was a hot day.
                </p>
            )}
        </>
    );
}