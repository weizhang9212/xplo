const initialState = {
    logIn : true,
    currentPage : 0
}


const reducer = (state = initialState, action) =>{
    if(action.type === 'LOGIN'){
        return {
            ...initialState,
            logIn : true
        }
    }

    if(action.type === 'BOTBAR'){
        return {
            ...initialState,
            currentPage: action.choice
        }
    }


    return state;
    
}

export default reducer;