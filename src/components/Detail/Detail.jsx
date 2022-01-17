import { useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"

const Detail=()=>{
    const address=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:4000/suggestion/${address.productId}`)
        //.then(res=>)
    })
    return(
        <div>

        </div>
    )
}