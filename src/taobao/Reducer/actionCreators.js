const login=(userinfo)=>{
    return (dispatch)=>{
        let url='https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login';
        fetch(url,{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
        })
        .then(res=>res.json())
        .then(res=>{
            return dispatch({
                type:'LOGIN',
                userinfo:res.data.name
            })
        })
        
    }
}
export {login}

const getgoodslist=(datalist)=>{
    return (dispatch)=>{
    let url='https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/getgoodslist';
    fetch(url,{
        method:'post',
        headers:{
           'Content-Type':'application/json'
        },
    })
    .then(res=>res.json())
    .then(res=>{
         return dispatch({
            type:'DATA',
            datalist:res.data

        });
    })
  }
}
export {getgoodslist}