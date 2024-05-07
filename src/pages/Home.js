import React, { useState } from 'react'
import Navbar from '../components/Navbar';

const Home = () => {
    const [search,setSearch] = useState("")
    const [pageVal,setPageVal] = useState(0)

    return (
        <>
            <Navbar />
            {/* here comes the body */}
        </>
    )
}

export default Home
