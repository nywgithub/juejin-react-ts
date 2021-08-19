import  React,{useEffect,useState} from "react";
import axios from 'axios';
function System() {
    const [mockData, setmockData] = useState(); 
    useEffect(() => {
       fetchTest()
    }, []);

    var fetchTest = ()=>{
        // console.log(1)
        axios({
            url:"/postdata1",
            method:"get"
        }).then((res)=>{
            console.log(res.data.test)
            setmockData(res.data.test)
        })
    }
    return (<h2>hello {mockData}</h2>)
}
export default System;