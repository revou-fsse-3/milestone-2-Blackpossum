
const handleLogin = async (credentials) => {
  try {
    const loginApi = process.env.LOGIN_API;
    const response = await axios.post(loginApi, values);

    if (response.status === 200) {
      const Token = response.data.token;
      localStorage.setItem("Token", Token);
      Navigate("/dashboard");
    } else {
      console.log("Login Failed, check API status");
    }
  } catch (error) {
    console.error("Error during login", error);
  } finally {
    setSubmitting(false);
  }
};


export default handleLogin;

