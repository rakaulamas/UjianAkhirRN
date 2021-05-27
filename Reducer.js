const initialLoginGlobal={
    isLogin=false
}


LoginReducer(state=initialLoginGlobal.action) {
    if(action.type ==="SET_LOGIN"){
        return({
            ...state,
            [action.inputType]: action.inputValue
        })
    }
    return state;
}


cons reducer = combineReducers({
    LoginReducer,

})
