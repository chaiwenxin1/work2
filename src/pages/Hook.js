import React,{useState,useEffect,useContext} from 'react'
import Context from './Context'

// let i=0;
const Hook = () => {
    const context=useContext(Context);
    console.log(context);
    const [time,setTime]=useState(new Date().toLocaleTimeString());
    // setInterval(()=>{
    //     setTime(new Date().toLocaleTimeString());
    // },1000)
    //第二个参数是空数组时相当于ComponentDidMount
    useEffect(() =>{
        setInterval(()=>{
            // console.log(i++);
        setTime(new Date().toLocaleTimeString());
       },1000)
       return ()=>{
           console.log("componentwillUnMOUT")};
    }, [])
    //第二个参数不加或者指定某个值时相当于componentDidUpdate
    useEffect(() =>{
        console.log(1);
    })
    return (
        <div>
            {context}
        </div>
    )
}

export default Hook
