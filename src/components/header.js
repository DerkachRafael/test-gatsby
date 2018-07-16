import React from 'react'
import Link from 'gatsby-link'
import Menu from '../components/menu'
import { Grid, Row, Col } from 'react-flexbox-grid';

const Header = ({ siteTitle }) => (
  <header className="header">
   <Grid fluid>
   <Row middle="md">
   <Col xs={12} md={3}>
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
      </Col>
      <Col xs={12} md={9}>
      <Menu />
      </Col>
      </Row>
    </Grid>
  </header>
)

export default Header
