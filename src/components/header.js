import React from 'react'
import Link from 'gatsby-link'
import Menu from '../components/menu'

const Header = ({ siteTitle }) => (
  <header className="header">
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Menu />
    </div>
  </header>
)

export default Header
