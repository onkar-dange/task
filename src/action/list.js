export function AddToList(value) {
     console.log(value,"act value")
     
    return  dispatch =>{
        
         dispatch(datafetchbegin());
         return fetch("https://itunes.apple.com/search?term="+value)
    .then(result=> result.json())
    .then((data)=>{
        console.log("api res",data)
        dispatch(cleardata());
        dispatch(datafetchSuccess(data));
        if(value==""){
          dispatch(cleardata());
     }
    })
   
   
    }
   
}


export const datafetchbegin=()=>({
    type:"FETCH_BEEGIN",
})

export const cleardata=()=>({
    type:"CLEAR_DATA",
})

export const datafetchSuccess=(data)=>({
    type:"DATA_FETCH",
    payload:data
})