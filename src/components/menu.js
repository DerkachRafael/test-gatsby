import React, { Component } from 'react'
import Link from 'gatsby-link'
import menuData from '../data/menu.json'

export default class Menu extends Component {
  render() {
    return (
      <nav className="nav">
        <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
    {menuData.menu.map((item, index)=>(
        <li key={index} className="nav__item">
          <Link to={item.link} className="nav__link"> {item.title}</Link>
        </li>
    ))}
    </ul>
      </nav>
    )
  }
}
