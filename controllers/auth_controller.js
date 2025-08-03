const handleLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (username == "admin" && password == "admin") {
      req.session.user = {
        u_id: 1,
      };
      res.send(200).json({
        message: "Successfully Logged In",
        isLogged: true,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(401).json({
      message: "Invalid Credentials",
      isLogged: false,
    });
  }
  res.send("Logged in");
};

const handleLogout = async(req, res) => {
    try {
        req.session.destroy();
        res.status().send({
            message : "Successfully logged out"
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message : "Error logging out"
        });
    }
}

export { 
    handleLogin,
    handleLogout 
};
