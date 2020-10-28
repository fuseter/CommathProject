import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PolicyIcon from "@material-ui/icons/Policy";
import Lottie from "react-lottie";
import animationData from "../../Lottie/lf30_editor_6qoxxrrx.json";
import Alert from "@material-ui/lab/Alert";
import { getB2s } from "../../../src/functions/function";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(5, 0, 2),
  },
  root: {
    marginTop: 90,
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#9629E6",
      },
    },
  },
  textcenter: {
    textAlign: "center",
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function B2s() {
  const classes = useStyles();
  const [bit2string, setBit2string] = useState("011110");
  const [result, setResult] = useState("");

  const generate = () => {
    getB2s(bit2string).then((res) => {
      setResult(res);
    });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container className={classes.root} component="main" maxWidth="lg">
      <CssBaseline />
      <Card
        variant="outlined"
        style={{
          borderRadius: 10,
          boxShadow: "0 3px 20px 0px rgba(0, 0, 0, 0.12)",
        }}
      >
        <div>
          <Lottie options={defaultOptions} height={220} width={220} />
        </div>
        <div className={classes.paper}>
          <CardContent style={{ width: "40%" }}>
            <Grid style={{ marginBottom: 50 }}>
              <Typography
                component="h1"
                variant="h5"
                className={classes.textcenter}
                style={{ marginTop: -20 }}
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

            <Grid item xs={12} md={12}>
              <TextField
                variant="outlined"
                label="เลขฐานสอง"
                fullWidth
                id="bit2string"
                name="bit2string"
                value={bit2string}
                style={{ marginTop: -25 }}
                onChange={(e) => setBit2string(e.target.value)}
              />
            </Grid>
            {result ? (
              <Grid item md={12}>
                <Typography variant="h4" style={{ marginTop: 20 }}></Typography>
                <Alert severity="success">
                  <Typography variant="h5">ผลลัพธ์ :{result}</Typography>
                </Alert>
              </Grid>
            ) : (
              <div></div>
            )}
            <Grid item xs={12} md={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                size="large"
                fullWidth
                startIcon={<PolicyIcon />}
                onClick={generate}
              >
                <Typography style={{ fontSize: 20 }}>คำนวณ</Typography>
              </Button>
            </Grid>
          </CardContent>
        </div>
      </Card>
    </Container>
  );
}
