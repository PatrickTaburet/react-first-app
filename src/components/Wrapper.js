import React, { Component } from 'react'

function Wrapper({children}) {

    return (
        <div style={{backgroundColor: 'pink', width: '400px', padding: '10px', margin: "auto"}}>
            {children}
        </div>
    )
}

export default Wrapper