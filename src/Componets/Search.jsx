import React from 'react'
import '../Style/search.css'
import Header from "../Componets/Header"
import Footer from "../Componets/Footer"
import {useStateValue} from "../ContextAPI/StateProvider"

function Search() {
const [{term}, dispatch] = useStateValue();

    return (
        <div className="search">
        <Header/>            
        <div className="search_section">
            <h1> Search page</h1>
            <p>{term}</p>
        </div>
        <Footer/>
        </div>
    )
}

export default Search;
