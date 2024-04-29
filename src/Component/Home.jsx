import React, { useState } from 'react'
import "./Home.css";
import data from "./db.json";
import Display from './Display';
const Home = () => {
    let [language,setLanguage]=useState(null)
    let [country,setCountry]=useState(null)
    let [genre, setGenre]=useState(null)
  return (
    <div className='home'>
        <div className="nav">
            <h2>Moviesda</h2>
        </div>
        <div className="filter">
            <h1>Filter:</h1>
            <div className="fil">
            <h2>Language</h2>
            <select id='select1' onChange={(e)=>{setLanguage(e.target.value)}}>
                <option value="null">Select</option>
                <option value="Hindi">Hindi</option>
                <option value="Malayalam">Malayalam</option>
                <option value="Kannada">Kannada</option>
                <option value="Tamil">Tamil</option>
                <option value="English">English</option>
                <option value="Japanese">Japanese</option>
                <option value="Chinese">Chinese</option>
                <option value="Spanish">Spanish</option>
                <option value="Korean">Korean</option>
                <option value="Telugu">Telugu</option>
                <option value="Oriya">Oriya</option>
                <option value="Bengali">Bengali</option>
                <option value="Assamese">Assamese</option>
            </select>
            <h2>Country:</h2>
            <select id='select2' onChange={(e)=>{setCountry(e.target.value)}}>
                <option value="null">Select</option>
                <option value="India">India</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Ireland">Ireland</option>
                <option value="Norway">Norway</option>
                <option value="United States">United State</option>
                <option value="Singapore">Singapore</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Canada">Canada</option>
                <option value="Finland">Finland</option>
            </select>
            <h2>Genres:</h2>
            <select id='select3' onChange={(e)=>{setGenre(e.target.value)}}>
                <option value="null">Select</option>
                <option value="Drama">Drama</option>
                <option value="Thriller">Thriller</option>
                <option value="Comedy">Comedy</option>
                <option value="Romance">Romance</option>
                <option value="Sport">Sport</option>
                <option value="Biography">Biography</option>
                <option value="Action">Action</option>
                <option value="Crime">Crime</option>
                <option value="Documentary">Documentary</option>
                <option value="Adventure">Adventure</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Animation">Animation</option>
                </select>
                </div>
        </div>
        <Display data={data} language={language} genre={genre} country={country}/>
       
    </div>
  )
}

export default Home