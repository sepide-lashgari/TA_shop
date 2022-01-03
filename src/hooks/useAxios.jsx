
import React, {useState, useEffect} from "react"
import axios from "axios";


const useAxios = (endpoint) => {
    console.log("start useAxios")

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetch = async () => {
            try {
                console.log("start try")
                await setLoading(true)
                await axios.get(`http://localhost:4000/${endpoint}`)
                    .then(
                        (res) => {
                            console.log(res.data, "response", loading)

                            setData(res.data)
                        }
                    )
            } catch (e) {
                await setError(e)
            } finally {
                await setLoading(false)
            }
        }

        fetch()

    }, [endpoint])

    console.log("end useAxios")

    return {data, error, loading}
}

export default useAxios
