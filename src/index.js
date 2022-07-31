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
  //  search : search 값, 속성정렬, 올,내림차순
  const [query,setQuery] = useState('')
  const [sortBy,setSortBy]= useState('petName')
  const [orderBy,setOrderBy] = useState('asc')

const filterAppintments = appintList.filter(
  item => { 
    return (
    item.petName.toLowerCase().includes(query.toLowerCase()) ||
    item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
    item.aptNotes.toLowerCase().includes(query.toLowerCase())
  )}
).sort(
  (a,b) => {
    let order = (orderBy === 'asc' ? 1 : -1)
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase? -1 * order : 1*order
    )
}
)


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
      <AddApointment 
      onSendAppointement ={
        myApointment => setAppointList([...appintList,myApointment])
      }
      lastId={
        appintList.reduce((max,item) => Number(item.id) > max ? Number(item.id) : max , 0 )
      }
      /> 
      <Search
        query = {query}
        onQueryChange = {myQuery =>setQuery(myQuery)}
        sortBy = {sortBy}
        onSortChange ={mySort => setSortBy(mySort)}
        orderBy = {orderBy}
        onOrderChage ={myOrder => setOrderBy(myOrder)}
         />
      <div id="list">
      <ul>
         {filterAppintments.map( 
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