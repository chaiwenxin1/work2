let shoucang=[];
function getshoucang(state=shoucang,action){
    if(action.type=='ADD_ID'){
        console.log(action);
        return [...state,action.value]
    }
    if(action.type=='DELETE_ID'){
        //不可变对象
        let arr=[...state];
        arr.splice(action.index,1);
        return arr;
    }
    return state;
    
} 
export default getshoucang;