import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { IconButton, Button, Grid } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";
import { Cpu as Cpuicon } from "react-feather";
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbarcolor: {
    background: "linear-gradient(to right, #6F40E0, #803FE3)",
  },
  textstyle: {
    textTransform: "lowercase",
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <ElevationScroll {...props}>
          <AppBar className={classes.appbarcolor}>
            <Toolbar>
              <Link to="/">
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                >
                <Cpuicon  color="#fff" />
              </IconButton>
                </Link>
                <Link to="/">
              <Typography style={{color : "#fff" ,textTransform : "uppercase"}} variant="h6" className={classes.title}>
                Commath
              </Typography>
                </Link>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </AppBar>
    </div>
  );
}
