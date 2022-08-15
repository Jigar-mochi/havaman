import React, { useEffect, useState } from 'react'
import Items from './Items'
import '../css/Sty.css'
import Navbar2 from './Navbar2'

function News(props) {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [tot, setTot] = useState(0)

  // A
  // change data
  // P
  const update = async () => {
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    setTot(parsedata.totalResults)
    setData(parsedata.articles)
  }
  useEffect(() => {
    update()
    // eslint-disable-next-line
  }, [])

  const handlnext = async () => {
    if (page > Math.floor(tot / 20)) {
      console.log(Math.ceil(tot / 20))
    }
    else {
      setPage(page + 1)
      let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apikey}&page=${page + 1}&pagesize=${props.pagesize}`;
      let data = await fetch(url);
      let parsedata = await data.json();
      setTot(parsedata.totalResults)
      setData(parsedata.articles)
      console.log(data)
    }

  }
  const handlprivious = async () => {
    setPage(page - 1)
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apikey}&page=${page - 1}&pagesize=${props.pagesize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    setTot(parsedata.totalResults)
    setData(parsedata.articles)
    console.log(data)
  }

  return (
    <div className="box conta">
      < div className="row" >
        <div className="col-md">

          <div className='container '>
            <Navbar2 />
            <h1 className='text text-center' >Top News of {props.category} category</h1>
            <div className="row">
              {
                data.map((e, index) => {
                  return <div className="col-md-4" key={index}>
                    <Items img1={e.urlToImage} title={e.title ? e.title.slice(0, 45) : ""} nurl={e.url} />
                  </div>
                })
              }
            </div>
            <div className="d-flex butt justify-content-between">
              <button disabled={page <= 1} onClick={handlprivious} type="button" className="btn btn-primary">Privious</button>
              <button disabled={page > Math.ceil(data.totalResults / 9)} onClick={handlnext} type="button" className="btn btn-primary">Next</button>
            </div>
          </div>
        </div>

      </ div>
    </div >

  )
}

export default News

