import React from "react"

import Link from "../components/Link"
import { makeStyles } from "@material-ui/core/styles"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  ButtonBase,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

const navLinks = [
  { text: "Home", path: "/" },
  { text: "Blog", path: "/blog" },
  { text: "Project", path: "/project" },
  { text: "Tutorial", path: "/tutorial" },
  { text: "Contact", path: "/contact" },
  { text: "About", path: "/about" },
]

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 100,
  },
}))

export default function Header() {
  const classes = useStyles()

  const [state, setState] = React.useState({
    isDrawerOpen: false,
  })

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ isDrawerOpen: open })
  }

  const NavList = () => (
    <div>
      {navLinks.map((el, idx) => (
        <Link key={idx} to={el.path}>
          <Button variant="contained" color="primary" disableElevation>
            {el.text}
          </Button>
        </Link>
      ))}
    </div>
  )

  const NavListDrawer = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {navLinks.map((el, idx) => (
        <ListItem>
          <Link key={idx} to={el.path} component="button" underline="none">
            <ListItemText primary={el.text} />
          </Link>
        </ListItem>
      ))}
    </div>
  )
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Hidden mdUp>
            {/*menu icon toggle navbar for small screen */}
            <IconButton
              onClick={toggleDrawer(true)}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={state.isDrawerOpen} onClose={toggleDrawer(false)}>
              <NavListDrawer />
            </Drawer>
          </Hidden>
          <Hidden smDown>
            {/*Navbar for big size screen */}
            <NavList />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  )
}
