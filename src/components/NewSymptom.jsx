import React, { useState } from "react";

const NewSymptom = () => {
    const initialValues = {
        painLevelGeneral: 0,
        painLevelHead: 0,
        painLevelChest: 0,
        painLevelLeftArm: 0,
        painLevelRightArm: 0,
        painLevelLumbar: 0,
        painLeveLeftLeg: 0,
        painLevelRightLeg: 0,
        painLevelLeftFoot: 0,
        painLevelRightFoot: 0,
        painkillerPillOptionOne: false,
        painkillerPillOptionTwo: false,
        painkillerPillOptionThree: false,
        theUltimatePainkiller: false,
        tUpTemp: 0,
        tUpAmount: 0,
        exercisesOptionOne: false,
        exercisesOptionTwo: false,
        exercisesOptionThree: false,
        hoursOfSitting: 0
    }
    

    const [symptoms, setSymptoms] = useState([]);
    const [painState, setPainState] = useState(initialValues);

    const addSymptoms = (event) => {
        event.preventDefault()
        const symptomsObject = {
            date: new Date().toLocaleString(),
            id: symptoms.length + 1,
            content: painState,
        }
        setSymptoms(symptoms.concat(symptomsObject))
        console.log('pain symptoms', symptoms)
        //setPainState([])
    }

    const handleInputChange = (event) => {
        //const painLevelGeneral = event.target.value;
        const {name, value} = event.target
        console.log(event.target.value)
        setPainState({
            ...painState,
            [name]: value
        })
    }

    console.log('pain symptoms', symptoms)
    return (
        <div className="new-symptom-container">
            <form onSubmit = {addSymptoms} className="new-symptom-form">
                <div className="single-symptom-container">
                    <p>painLevelGeneral</p>
                <label>
                    0
                    <input
                        type="radio"
                        name="painLevelGeneral"
                        value="0"
                        onChange={handleInputChange}/>
                </label>
                <label>
                    1
                    <input
                        type="radio"
                        name="painLevelGeneral"
                        value="1"
                        onChange={handleInputChange}/>
                </label>
                </div>
                <div className="single-symptom-container">
                    <p>painLevelHead</p>
                <label>
                    0
                    <input
                        type="radio"
                        name="painLevelHead"
                        value="0"
                        onChange={handleInputChange}/>
                </label>
                <label>
                    1
                    <input
                        type="radio"
                        name="painLevelHead"
                        value= '1'
                        onChange={handleInputChange}/>
                </label>
                </div>
                <div className="single-symptom-container">
                    <p>painLevelChest</p>
                <label>
                    0
                    <input
                        type="radio"
                        name="painLevelChest"
                        value="0"
                        onChange={handleInputChange}/>
                </label>
                <label>
                    1
                    <input
                        type="radio"
                        name="painLevelChest"
                        value= '1'
                        onChange={handleInputChange}/>
                </label>
                </div>
                <button type="submit">save</button>
            </form>
            <div>
                {symptoms.map(symptom => <p key = {symptom.id}>{symptom.content.painLevelGeneral}</p> )}
            </div>
            
        </div>
    )

}

export default NewSymptom