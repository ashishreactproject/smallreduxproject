import React from 'react'

function User(props){

    const {data}  = props
    return(
        <div>
            <h3>User Component</h3>
            <h2>{data.name}</h2>
            <h2>{data.age}</h2>
            </div>
    )
}

export default User;