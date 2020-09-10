import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import InputBase from "@material-ui/core/InputBase"
import { fade, makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import SearchIcon from "@material-ui/icons/Search"
import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { selectToken } from "../../store/user/selectors"
import Login from "./Login"
import Logout from "./Logout"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    backgroundcolor: "#000000",
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}))

export default function SearchAppBar() {
  const token = useSelector(selectToken)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar style={{ background: "#2E3B55" }} position="static">
        <Toolbar>
          <Link to="/">
            <Button variant="contained">home</Button>
          </Link>
          <Link to="/my-posts">
            <Button variant="contained">My posts</Button>
          </Link>
          <Link to="/visual-sketcher">
            <Button variant="contained">Visual Sketcher</Button>
          </Link>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer"></IconButton>
          {token === null ? <Login /> : <Logout />}

          <Typography className={classes.title} variant="h6" noWrap>
            MediShare
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

// export default function NavBar() {
//   const token = useSelector(selectToken)

//   return (
//     <div className="Navbar">
//       <span>home </span>
//       <span>My posts </span>
//       {token === null ? <Login /> : <Logout />}

//       <SearchPost />
//     </div>
//   )
// }
