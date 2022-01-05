import React, {useEffect, useState} from "react"
import "./Search.css"
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {fetchSearch} from "../../redux/search/search-actions";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const searchRes = useSelector(state => state.searchReducer.search)
    const [active,setActive] = useState(0)

    const [searchData,setSearchData]=useState("")

    useEffect(
        // syntax useEffect intorie ye function bayad bashe toosh *
        () => {
            if(searchData.length> 0){
                console.log(searchData)
                axios.get(`http://localhost:4000/suggestion?q=${searchData}`)
                .then((res)=>{
                    console.log(res.data)
                    dispatch(fetchSearch(res.data))
                })
            }
            else{
                dispatch(fetchSearch())
            } 
        }
    ,[searchData])

    const keyHandler=(e)=>{
        if (searchRes?.length > 0) {
            if (e.which===38){
                console.log("top")
                if (active>0){
                    setActive((prevstate)=> prevstate -1);
                }else{
                    setActive(searchRes.length -1);
                }
            }
            else if (e.which===40){
                if (active<searchRes.length){
                    setActive((prevstate)=> prevstate+1);}
                    else {
                        setActive(searchRes.length)
                    }
                }
            }
            else if (e.which=== 13){
                navigator('products/${searchRes[activeSearch].id}')

            }
        }
    

    return (
        <div className={`search d-flex flex-row-reverse p-2 position-relative`}>
            <input type="text" className={`rtl col-lg-8 text-end`} placeholder={`نام محصول و دسته و ...`}
                   onChange={e => setSearchData(e.target.value)}
                   onKeyUp={keyHandler}
            />
            {/*<button className={`col-lg-4`}>جستجو</button>*/}
            {
                searchRes ?
                    <div style={{
                        position: "absolute",
                        top: "100%",
                        right: "0",
                        width: "100%",
                        maxHeight: "350px",
                        backgroundColor: "#fff",
                        zIndex: "10",
                        overflow: "auto"
                    }}>
                        <ul className={`ps-0`}>
                            {
                                searchRes.length > 0 ?
                                    searchRes.map((item,index) =>
                                        <li className={`${index===active ? `bg-light`:``} text-end py-3 px-2 `}
                                            style={{
                                                listStyle: "none",
                                                borderBottom: "1px solid #eee",
                                                fontSize:"14px",
                                            }}>
                                            {item.name}

                                        </li>
                                    )
                                    :
                                    <li className={`text-end py-3 px-2`}>No Search Result </li>
                            }
                        </ul>
                    </div>
                    :
                    null
            }
        </div>
    )
}

export default Search
