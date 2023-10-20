import React from 'react'

export default function Alert(props) {

    return (

        props.description && <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>  {props.description.type} </strong> : {props.description.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

    )
}