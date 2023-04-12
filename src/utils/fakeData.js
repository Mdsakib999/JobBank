import { json } from "react-router-dom"


const addToLocal = id =>{
    localStorage.setItem('apply-job', id)

    let appliedJobs = {}

    // get data from local

    const storedData = localStorage.getItem('apply-job')

    if(storedData) {
        appliedJobs = JSON.parse(storedData)
    }


    const number = appliedJobs[id]
    if(number) {
        const newNumber = number + 1;
        appliedJobs[id] = newNumber
    }
    else{
        appliedJobs[id] = 1
    }

    localStorage.setItem('apply-job', JSON.stringify(appliedJobs))
}

export{addToLocal}