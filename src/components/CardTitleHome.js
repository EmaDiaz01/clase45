import React from 'react'

export default function CardTitleHome(props) {
    return (
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
                <img className="card-img-top" src={props.url} alt="" />
           
            </div>
        </div>
    )
}
