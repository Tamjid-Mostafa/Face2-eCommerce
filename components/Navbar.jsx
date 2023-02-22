import React from 'react'
import Meta from './layout/meta'

const Navbar = ({ meta, children }) => {
    return (<>
        <Meta {...meta} />
        <div>Navbar</div>
    </>
    )
}

export default Navbar