import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

interface LoginProps {}

const validationSchema = yup.object({
  email: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const LoginPage: React.FC<LoginProps> = ({}) => {
  const navigate = useNavigate();

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
      const res = await axios.post(
        "https://mock-api.arikmpt.com/api/user/login",
        values
      );
      localStorage.setItem("token", res.data.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  return (
    <div className="my-20 w-[800px] h-[400px] mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Log In</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="grid gap-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="border rounded p-2"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="border rounded p-2"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 text-white py-2 rounded"
              >
                Login
              </button>

              <p className="text-center my-4">OR</p>

              <button
                type="submit"
                onClick={() => navigate("/signup")}
                className="border border-blue-500 text-blue-500 py-2 rounded"
              >
                Sign Up
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
