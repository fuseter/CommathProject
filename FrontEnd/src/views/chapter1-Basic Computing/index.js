import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: 250,
  },
  root: {
    marginTop: 60,
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#9629E6",
      },
    },
  },
  textcenter: {
    textAlign: "center",
  },
  cenetr: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Container className={classes.root} component="main" maxWidth="lg">
        <CssBaseline />
        <Card
          variant="outlined"
          style={{
            borderRadius: 10,
            boxShadow: "0 3px 20px 0px rgba(0, 0, 0, 0.12)",
          }}
        >
          <CardContent>
            {/* <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Grid style={{ marginBottom: 50 }}>
              <Typography
                component="h1"
                variant="h5"
                className={classes.textcenter}
              >
                บทที่ 1
              </Typography>
              <Typography
                component="h1"
                variant="h5"
                className={classes.textcenter}
              >
                Basic Computing
              </Typography>
            </Grid>
            <Grid className={classes.cenetr}>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                
                id="email"
                name="email"
                autoComplete="email"
                />
            </Grid>
                </Grid>
            <Grid className={classes.cenetr}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                size="large"
              >
                <Typography style={{ fontSize: 20 }}>คำนวณ</Typography>
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
