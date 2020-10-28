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
import { getInterpolation } from "../../../src/functions/function";

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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(5, 0, 2),
    justifyContent: "center",
    alignItems: "center",
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

export default function GetInterpolation() {
  const classes = useStyles();
  const [x, setx] = useState(5);
  const [xi1, setxi1] = useState(0);
  const [xi2, setxi2] = useState(8);
  const [xi3, setxi3] = useState(14);
  const [xi4, setxi4] = useState(20);
  const [xi5, setxi5] = useState(23);
  const [xi6, setxi6] = useState(30);
  const [yi1, setyi1] = useState(0);
  const [yi2, setyi2] = useState(50);
  const [yi3, setyi3] = useState(96);
  const [yi4, setyi4] = useState(110);
  const [yi5, setyi5] = useState(100);
  const [yi6, setyi6] = useState(86);
  const [result, setresult] = useState();

  const generate = () => {
    const data = {
      x: x,
      xi: [xi1, xi2, xi3, xi4, xi5, xi6],
      yi: [yi1, yi2, yi3, yi4, yi5, yi6],
    };
    getInterpolation(data).then((res) => {
      setresult(`วินาทีที่ ${x} จะมีความเร็วประมาณ ${res}`);
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
          <CardContent style={{ width: "80%" }}>
            <Grid style={{ marginBottom: 50 }}>
              <Typography
                component="h1"
                variant="h5"
                className={classes.textcenter}
                style={{ marginTop: -20 }}
              >
                บทที่ 3
              </Typography>
              <Typography
                component="h1"
                variant="h5"
                className={classes.textcenter}
              >
                Interpolation
              </Typography>
            </Grid>
            <Grid container spacing={8}>
              <Grid item md={12}>
                <Grid container spacing={5}>
                  <Grid item sm={2}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="Basenum"
                      name="Basenum"
                      label="t"
                      style={{ marginTop: -10 }}
                      value={x}
                      onChange={(e) => setx(e.target.value)}
                    />
                  </Grid>
                  <Grid item sm={2}></Grid>
                  <Grid item sm={2}></Grid>
                  <Grid item sm={2}></Grid>
                  <Grid item sm={2}></Grid>
                  <Grid item sm={2}></Grid>
                  <Grid item sm={2}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="Basenum"
                      name="Basenum"
                      label="x1"
                      style={{ marginTop: -25 }}
                      value={xi1}
                      onChange={(e) => setxi1(e.target.value)}
                    />
                  </Grid>
                  <Grid item sm={2}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="Basenum"
                      name="Basenum"
                      label="x2"
                      style={{ marginTop: -25 }}
                      value={xi2}
                      onChange={(e) => setxi2(e.target.value)}
                    />
                  </Grid>
                  <Grid item sm={2}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="Basenum"
                      name="Basenum"
                      label="x3"
                      style={{ marginTop: -25 }}
                      value={xi3}
                      onChange={(e) => setxi3(e.target.value)}
                    />
                  </Grid>
                  <Grid item sm={2}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="Basenum"
                      name="Basenum"
                      label="x4"
                      style={{ marginTop: -25 }}
                      value={xi4}
                      onChange={(e) => setxi4(e.target.value)}
                    />
                  </Grid>
                  <Grid item sm={2}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="Basenum"
                      name="Basenum"
                      label="x5"
                      style={{ marginTop: -25 }}
                      value={xi5}
                      onChange={(e) => setxi5(e.target.value)}
                    />
                  </Grid>
                  <Grid item sm={2}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="Basenum"
                      name="Basenum"
                      label="x6"
                      style={{ marginTop: -25 }}
                      value={xi6}
                      onChange={(e) => setxi6(e.target.value)}
                    />
                  </Grid>
                  <Grid item sm={2}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="Basenum"
                      name="Basenum"
                      label="y1"
                      style={{ marginTop: -25 }}
                      value={yi1}
                      onChange={(e) => setyi1(e.target.value)}
                    />
                  </Grid>
                  <Grid item sm={2}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="Basenum"
                      name="Basenum"
                      label="y2"
                      style={{ marginTop: -25 }}
                      value={yi2}
                      onChange={(e) => setyi2(e.target.value)}
                    />
                  </Grid>
                  <Grid item sm={2}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="Basenum"
                      name="Basenum"
                      label="y3"
                      style={{ marginTop: -25 }}
                      value={yi3}
                      onChange={(e) => setyi3(e.target.value)}
                    />
                  </Grid>
                  <Grid item sm={2}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="Basenum"
                      name="Basenum"
                      label="y4"
                      style={{ marginTop: -25 }}
                      value={yi4}
                      onChange={(e) => setyi4(e.target.value)}
                    />
                  </Grid>
                  <Grid item sm={2}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="Basenum"
                      name="Basenum"
                      label="y5"
                      style={{ marginTop: -25 }}
                      value={yi5}
                      onChange={(e) => setyi5(e.target.value)}
                    />
                  </Grid>
                  <Grid item sm={2}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="Basenum"
                      name="Basenum"
                      label="y6"
                      style={{ marginTop: -25 }}
                      value={yi6}
                      onChange={(e) => setyi6(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12}>
              <Typography variant="h4" style={{ marginTop: 20 }}></Typography>
              <Alert severity="success">
                <Typography variant="h5">ผลลัพธ์ : {result}</Typography>
              </Alert>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              style={{ paddingLeft: 200, paddingRight: 200 }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                size="large"
                fullWidth
                onClick={generate}
                startIcon={<PolicyIcon />}
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
