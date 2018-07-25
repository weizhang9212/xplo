const initialState = {
    logIn : true,
    currentPage : 0
}


const reducer = (state = initialState, action) =>{
    if(action.type === 'LOGIN'){
        console.log(111);
        return {
            ...initialState,
            logIn : true
        }
    }

    if(action.type === 'BOTBAR'){
        return {
            ...initialState,
            logIn:true,
            currentPage: action.choice
        }
    }


    return state;
    
}

export default reducer;