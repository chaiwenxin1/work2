let datalist=[];
const getdatalist=(state=datalist,action)=>{
    switch(action.type){
        case 'DATA':
         let data=  Object.assign({},state,{datalist:action.datalist})
           return data.datalist;
        default:
            return state;
    }
    
}    
export default getdatalist;