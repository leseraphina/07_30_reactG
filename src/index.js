import React,{useState,useEffect,useCallback} from 'react'
import ReactDOM from 'react-dom/client'

// 컴포넌트 import
import AddApointment from './Components/AddApointment'
 import AppInfo from './Components/AddInfo'
 import Search from './Components/Search'

// 목업
// import appointData from './data.json'

// 소스파일
import './index.css'
import { BiArchive } from "react-icons/bi";

function App(){
  // state
  // list
  const [appintList,setAppointList] = useState([])
  //  search

// callBack
const fetchData = useCallback(
  ()=>{
    fetch('./data.json')
    .then(response => response.json())
    .then(data => setAppointList(data))
  },[])

// useEffect
useEffect(()=>{fetchData()},[fetchData])

  return (
    <article>
      <h3><BiArchive />
      welcome</h3>
      <AddApointment /> 
      <Search />
      <div id="list">
      <ul>
         {appintList.map( 
          (appointment) => 
            (<AppInfo 
              key={appointment.id} 
              appointment={appointment}
              onDeleteAppoint={
                appointmentId => setAppointList(appintList.filter(appointment => appointment.id !== appointmentId))
              }
               />) )
          }
      </ul>
      </div>
    </article>
  )
}


// 출력
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)