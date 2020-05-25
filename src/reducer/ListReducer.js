const listDefaultState={loading:true,api_data:[]}

export default (state=listDefaultState,action)=>{
   
    switch (action.type) {
                
        case "FETCH_BIGIN":
        return {
            ...state,loading:true
        }
        
        case "CLEAR_DATA":
        return{
            ...state,api_data:[],loading:true
        }

        case "DATA_FETCH":
        return{
           ...state,api_data:action.payload.results,
            loading:false,
        }

                default:
                    return state;
            }
}