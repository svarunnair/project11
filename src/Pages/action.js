import axios from "axios"


export const GET_DATA_REQUIEST = "GET_DATA_REQUIEST"
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS"
export const GET_DATA_FAILURE = "GET_DATA_FAILURE"

export const GET_INFO_REQUIEST = "GET_INFO_REQUIEST"
export const GET_INFO_SUCCESS = "GET_INFO_SUCCESS"
export const GET_INFO_FAILURE = "GET_INFO_FAILURE"



const getDataRequiest=()=>{
    return({
        type:GET_DATA_REQUIEST
    })
}
const getDataSuccess=(data)=>{
    return({
        type:GET_DATA_SUCCESS,
        payload: data
    })
}
const getDataFailure=()=>{
    return({
        type:GET_DATA_FAILURE
    })
}

const getInfoRequiest=()=>{
    return({
        type: GET_INFO_REQUIEST
    })
}
const getInfoSuccess=(data)=>{
    return({
        type:GET_INFO_SUCCESS,
        payload: data
    })
}
const getInfoFailure=()=>{
    return({
        type:GET_INFO_FAILURE
    })
}












export const getData=()=>(dispatch)=>{
    dispatch(getDataRequiest())
    return axios({
        url:"https://www.gov.uk/bank-holidays.json",
        method :"GET"
    })
    .then((res)=>{
        dispatch(getDataSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(getDataFailure())
    })

}


/////second data





export const getInfo=()=>(dispatch)=>{
    dispatch(getInfoRequiest())
    return axios({
        url:"https://collectionapi.metmuseum.org/public/collection/v1/objects/100",
        method :"GET"
    })
    .then((res)=>{
        dispatch(getInfoSuccess(res.data))
        console.log("hhhhhhhhhh",res)
    })
    .catch((error)=>{
        dispatch(getInfoFailure())
    })

}