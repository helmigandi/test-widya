const router = require("express").Router();
const UserController = require("./../controllers/UserController");

router.get("/", (req, res) => {
  res.send("Wellcome to REST API Test, you must register and login first");
});

router.post("/register", UserController.registerHandler);
router.post("/login", UserController.loginHandler);

module.exports = router;
