import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'
import Burger from '@animated-burgers/burger-slip'
import '@animated-burgers/burger-slip/dist/styles.css' // drawer.scssの前に読み込む
import '../styles/header.scss'
import {
  AppBar,
  Container,
  Toolbar,
  SwipeableDrawer,
  List,
  makeStyles,
  Divider
} from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles({
  paper: {
    background: 'rgb(240, 248, 248)',
    height: 'fit-content'
  }
})

export const Header: FC = () => {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false)
  const toggleDrawer = () => {
    const currentState: boolean = isDrawerOpen
    setDrawerOpen(!currentState)
  }
  const isMobile = useMediaQuery('(max-width:600px)')

  const classes = useStyles()

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        classes={{ paper: classes.paper }}
        anchor="top"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        id="drawer"
      >
        <div
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            <Link to="/" className="drawer-link">
              Top
            </Link>
            <Divider></Divider>
            <Link to="/about" className="drawer-link">
              Works
            </Link>
            <Divider></Divider>

            <Link to="contact" className="drawer-link">
              Contact
            </Link>
          </List>
        </div>
      </SwipeableDrawer>
    </React.Fragment>
  )

  return (
    <div>
      {drawer}
      <AppBar id="app-bar" position="fixed">
        <Toolbar id="header">
          <Link to="/" id="blog-title">
            <strong>{`< Jun's Blog />`}</strong>
          </Link>
          {isMobile ? (
            <Burger
              id="burger-button"
              onClick={toggleDrawer}
              isOpen={isDrawerOpen}
            />
          ) : (
            <Container className="header-contents">
              <Link to="/" className="header-content">
                Top
              </Link>
              <Link to="/about" className="header-content">
                Works
              </Link>
              <Link to="/contact" className="header-content">
                Contact
              </Link>
            </Container>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
