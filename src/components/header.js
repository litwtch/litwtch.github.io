import React from "react"
import { Link } from "gatsby"

const Header = () => {

  return (
    <header sx={{ mb: [5, 6] }}>
      <div
          style={{
            display: 'flex',
            margin: `0 auto`,
            padding: `2rem 2rem 2rem`,
          }}
      > 
        <div style={{marginRight: '40px'}}>
            <Link className={'home'} to="/">ottilia</Link>
        </div>
        
        <Link className={'link'} to="/about-me/">about me</Link> 
        <Link className={'link'} to="/projects/">projects</Link>
        <Link className={'link'} to="/certifications/">certs</Link>
      </div>
    </header>
  )
}

export default Header