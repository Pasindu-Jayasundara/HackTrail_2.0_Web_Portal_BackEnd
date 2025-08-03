const handleLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (username === "admin" && password === "admin") {
      req.session.user = {
        u_id: 1,
      };

      return res.status(200).json({
        message: "Successfully Logged In",
        isLogged: true,
      });
    }

    return res.status(401).json({
      message: "Invalid Credentials",
      isLogged: false,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
      isLogged: false,
    });
  }
};

const handleLogout = async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          message: "Error logging out",
          isLogged: true,
        });
      }

      return res.status(200).json({
        message: "Successfully logged out",
        isLogged: false,
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error during logout",
      isLogged: true,
    });
  }
};

export { handleLogin, handleLogout };
