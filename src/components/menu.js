import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class Menu extends Component {
  render() {
    return (
      <div>
        <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/photo">Photo</Link>
      </li>
      <li>
        <Link to="/makeAppointment">Make Appointment</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
      </div>
    )
  }
}
