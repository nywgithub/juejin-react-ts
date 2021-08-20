import  React,{useEffect,useState} from "react";
import axios from 'axios';
import AppCard from '@CP/app-card'
function Main() {
    const [mockData, setmockData] = useState(); 
    useEffect(() => {
       fetchTest()
    }, []);

    var fetchTest = ()=>{
        axios({
            url:"/postdata1",
            method:"get"
        }).then((res)=>{
            console.log(res.data.test)
            setmockData(res.data.test)
        })
    }
    return (
        <>
            <h2>hello {mockData}</h2>
            <AppCard title="此处为标题"/>
        </>
    )
}
export default Main;