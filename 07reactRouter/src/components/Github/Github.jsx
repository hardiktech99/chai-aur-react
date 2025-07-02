import React, { useEffect, data, useState } from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";


function Github(){
    const data = useRouteLoaderData
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data); 
    //         setData(data)
    //     })
    // }, [])
    return(
        <div className="text-center m-4 text-3xl p-6 bg-gray-400 object-center ">GitHub Followers: {data.followers}
            <img className="object-center" src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await  fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}