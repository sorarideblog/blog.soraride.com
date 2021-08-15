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
  Divider,
} from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles({
  paper: {
    background: 'rgb(240, 248, 248)',
    height: 'fit-content',
  },
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
            <Link to="/" className="blog-title drawer-link">
              <strong>{`< Jun's Blog />`}</strong>
            </Link>
            <Divider></Divider>
            <Link to="/" className="drawer-link">
              Top
            </Link>
            <Divider></Divider>
            <Link to="/works" className="drawer-link">
              Works
            </Link>
            <Divider></Divider>
            <Link to="/skills" className="drawer-link">
              Skills
            </Link>
            <Divider></Divider>
            <Link to="/profile" className="drawer-link">
              Profile
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
          <Link to="/" className="blog-title">
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
              <Link to="/works" className="header-content">
                Works
              </Link>
              <Link to="/skills" className="header-content">
                Skills
              </Link>
              <Link to="/profile" className="header-content">
                Profile
              </Link>
            </Container>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
