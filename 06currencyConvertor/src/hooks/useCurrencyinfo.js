import {useEffect, useState } from "react";

function useCurrencyInfo(currenecy){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currenecy}.min.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currenecy]))
        console.log(data);
    } , [currenecy])
    
    console.log(data);
    return data
}
export default useCurrencyInfo