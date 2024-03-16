import { Typography } from '@mui/material'
import React from 'react'

export default function Citations() {
    return (
        <div style={{marginTop: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
            
            <Typography variant="h6">
                React
            </Typography><br />
            <Typography variant="h6">
                <a className="link-slf" href="https://mui.com/">  Material-UI</a>
            </Typography><br />
            <Typography variant="h6">
                <a className="link-slf" href="https://api.nasa.gov/index.html"> Nasa Api</a>
            </Typography><br />
            <Typography variant="h6">
                <a className="link-slf" href="https://meowfacts.herokuapp.com/"> Cats Api 1</a>
            </Typography><br />
            <Typography variant="h6">
                <a className="link-slf" href="https://api.thecatapi.com"> Cats Api 2</a>
            </Typography>


        </div>
    )
}
