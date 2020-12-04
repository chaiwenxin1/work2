//reducer一个纯函数，没有副作用，有相同的输入一定会有相同的输出


let data={
    datalist:[],
    shoucang:[],
    useinfo:''
}
function todoList(state=data.datalist,action)
{
    if(action.type=='ADD_TODO'){
        //不可变对象
        
        return [...state,action.value];
    }
    if(action.type=='DELETE_TODO'){
        //不可变对象
        let arr=[...state];
        arr.splice(action.index,1);
        return arr;
    }
    return state;
}
export default todoList;