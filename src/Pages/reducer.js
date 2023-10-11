import { GET_DATA_FAILURE, GET_DATA_REQUIEST, GET_DATA_SUCCESS, GET_INFO_FAILURE, GET_INFO_REQUIEST, GET_INFO_SUCCESS } from "./action"




const initstate ={
    iserror:false,
    isloading:false,
    data:[],
    info:[]
}

export const reducer=(state=initstate, action)=>{
    switch(action.type){

        case GET_DATA_REQUIEST :
            return({
                ...state,
                iserror:false,
                isloading:true
            })
            case GET_DATA_SUCCESS :
                return({
                    ...state,
                    iserror:false,
                    isloading:false,
                    data: action.payload
                })
                case GET_DATA_FAILURE :
                    return({
                        ...state,
                        iserror:true,
                        isloading: false
                    })




                    ///second data
                            case GET_INFO_REQUIEST :
                                return({
                                    ...state,
                                    iserror:false,
                                    isloading:true
                                })
                                case GET_INFO_SUCCESS :
                                    return({
                                        ...state,
                                        iserror:false,
                                        isloading:false,
                                        info: action.payload
                                    })
                                    case GET_INFO_FAILURE :
                                        return({
                                            ...state,
                                            iserror:true,
                                            isloading: false
                                        })



                    default:
                        return({
                            ...state
                        })
                
    }
}