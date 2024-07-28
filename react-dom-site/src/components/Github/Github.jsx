import React, { useEffect, useState } from 'react'

function Github() {
    const [followers, setFollowers] = useState(0)
    useEffect(() => {
        fetch("https://api.github.com/users/hishitagupta")
            .then((response) => (response.json()))
            .then((data) => {
                console.log(data)
                setFollowers(data.followers)
            })
    }, [])

    return (
        <div className="bg-slate-700 text-white text-xl">Github:{followers}</div>
    )
}

export default Github