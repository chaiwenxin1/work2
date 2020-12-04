let userinfo='';
const homeReducer=(state=userinfo,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {userinfo:action.userinfo}
        default:
            return state;
    }
}
export default homeReducer;