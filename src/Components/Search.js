import React,{useState} from 'react'
import {BiSearch,BiCaretDown,BiCheck} from 'react-icons/bi'

function DropDown({toggleSort,orderBy,onOrderChage,sortBy,onSortChange}){
    if(!toggleSort){return null}
    return (
        <ul>
            <li
            onClick = {()=> onSortChange('petName')}
            >애기이름
               {(sortBy === 'petName') && <BiCheck />}
            </li>
            <li
             onClick = {()=> onSortChange('ownerName')}
            >예약자
                {(sortBy === 'ownerName') && <BiCheck />}
            </li>
            <li
            onClick = {()=> onSortChange('aptDate')}
            >날자별
                {(sortBy === 'aptDate') && <BiCheck />}
            </li>
            <li
            onClick = {()=> onOrderChage('asc')}
            >올림차순
                {(orderBy === 'asc') && <BiCheck />}
            </li>
            <li
            onClick = {()=> onOrderChage('desc')}
            >내림차순
                {(orderBy === 'desc') && <BiCheck />}
            </li>
        </ul>
    )
}


function Search({query,onQueryChange,orderBy,onOrderChage,sortBy,onSortChange}){
    const [toggleSort, setToggleSort] =useState(false)
    return (
        <div id="search">
         <p>
            <BiSearch />
            <input 
                type="text"
                value={query}
                onChange={
                    (event) =>{onQueryChange(event.target.value)}
                } 
                />
            <button 
                type="button"
                onClick={()=>{setToggleSort(!toggleSort)}}>
                정렬하기
                <BiCaretDown />
                </button>
         </p>

         <DropDown
            toggleSort= {toggleSort}
            orderBy = {orderBy}
            sortBy = {sortBy}
            onOrderChage = {myOrder => onOrderChage(myOrder)}
            onSortChange={mySort => onSortChange(mySort)}
             />
         </div>
    )
}

export default Search
