import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Typography, Container } from "@mui/material";
import { Link as RouterLink , useNavigate } from "react-router-dom";
import axios from "axios";

// validation formik

const ValidationSchema = Yup.object().shape({
  username: Yup.string().required("enter a valid username"),
  password: Yup.string().required("cannot leave blank"),
});

const LoginPage = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      const loginApi = process.env.LOGIN_API;
      const response = await axios.post(loginApi , values);

      if (response.status === 200) {
        const Token = response.data.token;
        localStorage.setItem("Token", Token);
        navigate("/dashboard");
      } else {
        console.log("Login Failed, check API status");
      }
    } catch (error) {
      console.error("Error during login", error);
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <Container>
      <div>
        <Typography variant="h5">Login</Typography>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={ValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field
              type="text"
              name="username"
              label="Username"
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              error={false}
              helperText={<ErrorMessage name="username" />}
            />
            <Field
              type="password"
              name="password"
              label="Password"
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              error={false}
              helperText={<ErrorMessage name="password" />}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
            >
              Login
            </Button>
            <Typography variant="body2" style={{ marginTop: "10px" }}>
              Don't have an account?{" "}
              <RouterLink to="/signup" style={{ textDecoration: "none" }}>
                <Typography color="primary" variant="body2">
                  Sign Up
                </Typography>
              </RouterLink>
            </Typography>
          </Form>
        </Formik>
      </div>
    </Container>
  );
};

export default LoginPage;
