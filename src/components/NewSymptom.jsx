import React, { useState } from "react";

const NewSymptom = () => {
    const initialValues = {
        date: new Date().toLocaleString(),
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
    const [painState, setPainState] = useState(initialValues);
    console.log('test', painState);
    return (
        <div className="new-symptom-container">
        <form className="new-symptom-form">
            
        </form>
    </div>
    )
    
}

export default NewSymptom