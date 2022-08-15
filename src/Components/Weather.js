import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { WiThermometer } from "react-icons/wi";
import { WiWindy } from "react-icons/wi";
import { WiDayRain } from "react-icons/wi";
import { AiOutlineSearch } from "react-icons/ai";
import '../css/weather.css'

function Weather() {
    const [article, setArticle] = useState({})
    const [text, setText] = useState("")
    const apikey = process.env.REACT_APP_APIKEY

    const handlachange = (event) => {
        console.log("event", event.target.value)
        setText(event.target.value)
        console.log(text)
    }
    const handleclick = () => {
        updateweather(text)
    }

    const updateweather = (city) => {
        if (!city) return
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apikey
        axios.get(url).then((res) => {
            console.log("responce", res)
            setArticle(res.data)
        }).catch((err) => {
            console.log("err")
        })


    }

    return (
        <div className='box1'>

            <div className='container'>
                <div className="container-md text-dark">

                    <form className='pad d-flex flex-row align-items-center justify-content-center '>
                        <AiOutlineSearch style={{ width: "2rem", height: "2rem" }} />
                        <input className="form-control me-3" value={text} type="text" onChange={handlachange} placeholder='search' aria-label="Search" />
                        <button type="button" onClick={handleclick} className="btn btn-primary">search</button>
                    </form>
                    {Object.keys(article).length > 0 && <div className='text-end mt-5 me-4'>
                        <h5><WiThermometer />  {article?.name}</h5>
                        <div className='d-flex flex-row justify-content-end'><h1 style={{ fontSize: "5rem" }}>{((article?.main?.temp) - 273.15).toFixed(2)}°</h1>C</div>
                        <h5 ><WiDayRain />{article?.weather[0]?.main}</h5>
                        <h5><WiWindy /> Windspeed : {article?.wind?.speed}</h5>
                    </div>}
                </div>
            </div>

        </div>
    )
}

export default Weather