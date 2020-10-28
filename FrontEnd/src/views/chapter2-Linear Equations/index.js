import React, { useState ,Fragment } from "react";
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
import { getElimination } from "../../../src/functions/function";

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

export default function Unit1() {
  const classes = useStyles();
  const [a00, seta00] = useState(6);
  const [a01, seta01] = useState(-4);
  const [a02, seta02] = useState(1);
  const [a10, seta10] = useState(-4);
  const [a11, seta11] = useState(6);
  const [a12, seta12] = useState(-4);
  const [a20, seta20] = useState(1);
  const [a21, seta21] = useState(-4);
  const [a22, seta22] = useState(6);

  const [b1, setb1] = useState(-14);
  const [b2, setb2] = useState(36);
  const [b3, setb3] = useState(6);

  const [x0, setx0] = useState();
  const [x1, setx1] = useState();
  const [x2, setx2] = useState();

  const generate = () => {
    const data = {
      A: [
        [a00, a01, a02],
        [a10, a11, a12],
        [a20, a21, a22],
      ],
      b: [b1, b2, b3],
    };
    getElimination(data).then((res) => {
      setx0(res[0]);
      setx1(res[1]);
      setx2(res[2]);
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
                บทที่ 2
              </Typography>
              <Typography
                component="h1"
                variant="h5"
                className={classes.textcenter}
              >
                Linear Equations
              </Typography>
            </Grid>

            <Grid container style={{ marginBottom: 50, textAlign: "center" }}>
              <Grid item md={6}>
                <Typography variant="h5">อาเรย์ A</Typography>
              </Grid>
              <Grid item md={6}>
                <Typography variant="h5">อาเรย์ B</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid item md={6}>
                <Grid container spacing={5}>
                  <Grid item sm={4}>
                    <Grid item>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="Basenum"
                        name="Basenum"
                        style={{ marginTop: -25 }}
                        value={a00}
                        onChange={(e) => seta00(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Grid item sm={4}>
                    <Grid item>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="Basenum"
                        name="Basenum"
                        style={{ marginTop: -25 }}
                        value={a01}
                        onChange={(e) => seta01(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Grid item sm={4}>
                    <Grid item>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="Basenum"
                        name="Basenum"
                        style={{ marginTop: -25 }}
                        value={a02}
                        onChange={(e) => seta02(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Grid item sm={4}>
                    <Grid item>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="Basenum"
                        name="Basenum"
                        style={{ marginTop: -25 }}
                        value={a10}
                        onChange={(e) => seta10(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Grid item sm={4}>
                    <Grid item>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="Basenum"
                        name="Basenum"
                        style={{ marginTop: -25 }}
                        value={a11}
                        onChange={(e) => seta11(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Grid item sm={4}>
                    <Grid item>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="Basenum"
                        name="Basenum"
                        style={{ marginTop: -25 }}
                        value={a12}
                        onChange={(e) => seta12(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Grid item sm={4}>
                    <Grid item>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="Basenum"
                        name="Basenum"
                        style={{ marginTop: -25 }}
                        value={a20}
                        onChange={(e) => seta20(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Grid item sm={4}>
                    <Grid item>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="Basenum"
                        name="Basenum"
                        style={{ marginTop: -25 }}
                        value={a21}
                        onChange={(e) => seta21(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Grid item sm={4}>
                    <Grid item>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="Basenum"
                        name="Basenum"
                        style={{ marginTop: -25 }}
                        value={a22}
                        onChange={(e) => seta22(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={6}>
                <Grid container spacing={5}>
                  <Grid item sm={4}>
                    <Grid item>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="Basenum"
                        name="Basenum"
                        style={{ marginTop: -25 }}
                        value={b1}
                        onChange={(e) => setb1(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Grid item sm={4}>
                    <Grid item>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="Basenum"
                        name="Basenum"
                        style={{ marginTop: -25 }}
                        value={b2}
                        onChange={(e) => setb2(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Grid item sm={4}>
                    <Grid item>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="Basenum"
                        name="Basenum"
                        style={{ marginTop: -25 }}
                        value={b3}
                        onChange={(e) => setb3(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {x0 ? (
              <Fragment>
                <Grid item md={12}>
                  <Typography
                    variant="h4"
                    style={{ marginTop: 20 }}
                  ></Typography>
                  <Alert severity="success">
                    <Typography variant="h5">ผลลัพธ์ x0 : {x0}</Typography>
                  </Alert>
                </Grid>
                <Grid item md={12}>
                  <Typography
                    variant="h4"
                    style={{ marginTop: 20 }}
                  ></Typography>
                  <Alert severity="success">
                    <Typography variant="h5">ผลลัพธ์ x1 : {x1}</Typography>
                  </Alert>
                </Grid>
                <Grid item md={12}>
                  <Typography
                    variant="h4"
                    style={{ marginTop: 20 }}
                  ></Typography>
                  <Alert severity="success">
                    <Typography variant="h5">ผลลัพธ์ x2 : {x2}</Typography>
                  </Alert>
                </Grid>
              </Fragment>
            ) : (
              <div></div>
            )}

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
