import React from 'react'
import nimg from '../Image/No_image.jpg'

function Items(props) {
    let { img1, title, nurl } = props

    return (
        <div className="d-flex justify-content-center">
            <div className="card my-3 shadow p-3 mb-5 bg-body rounded " style={{ width: "18rem" }}>
                <img src={img1 ? img1 : nimg} style={{ height: "8rem" }} className="card-img-top" alt="no" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <a href={nurl} target='_blank' rel="noreferrer" className="btn btn-primary">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default Items

