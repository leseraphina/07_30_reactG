import React,{useState} from 'react'
import {BiSearch,BiCaretDown,BiCheck} from 'react-icons/bi'

function DropDown({toggleSort}){
    if(!toggleSort){return null}
    return (
        <ul>
            <li>애기이름
                <BiCheck />
            </li>
            <li>예약자
                <BiCheck />
            </li>
            <li>날자별
                <BiCheck />
            </li>
            <l>올리차순
                <BiCheck />
            </l>
            <li>내림차순
                <BiCheck />
            </li>
        </ul>
    )
}


function Search(){
    const [toggleSort, setToggleSort] =useState(false)
    return (
        <div id="search">
         <p>
            <BiSearch />
            <input type="text" />
            <button 
                type="button"
                onClick={()=>{setToggleSort(!toggleSort)}}>
                정렬하기
                <BiCaretDown />
                </button>
         </p>

         <DropDown
            toggleSort= {toggleSort} />
         </div>
    )
}

export default Search
