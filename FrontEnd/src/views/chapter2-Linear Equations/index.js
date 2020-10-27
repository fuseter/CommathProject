import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Cpu as Cpuicon } from "react-feather";

const useStyles = makeStyles((theme) => ({

}));

export default function Commath() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar sizes="medium" className={classes.avatar}>
          <Cpuicon size="30" />
        </Avatar>
        <Typography component="h1" variant="h5">
          บทที่ 2
        </Typography>
        <Typography component="h1" variant="h5">
          Linear Equations
        </Typography>
      </div>
    </Container>
  );
}
