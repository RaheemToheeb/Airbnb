const express = require("express");
const router = express.Router();
const upload = require("../utils/Multer");
const {
  findUser,
  findoneUser,
  deleteUser,
  createUser,
  updateUser,
} = require("../Handler/SignUp");

// router.route("/find").get(findUser);
// router.route("/find/:userID").get(findoneUser);
// router.route("/create").post(createUser);
// router.route("/delete/:userID").delete(deleteUser);
// router.route("/patch/:userID").patch(updateUser);
router.post("/post", upload, createUser);
router.get("/get", findUser);
router.get("/find", findoneUser);
router.delete("/delete", deleteUser);
router.patch("/update/:id", updateUser);
module.exports = router;

// const express = require("express");
// router = express.Router();
// const {
//   postClub,
//   getAllclub,
//   getoneclub,
//   deleteoneclub,
//   updateSingleUser,
// } = require("../Handler/clubcontroller");

// router.post("/postClub", postClub);
// router.get("/getClubs", getAllclub);
// router.get("/getClub/:clubId", getoneclub);
// router.delete("/deleteClub/:clubId", deleteoneclub);
// router.patch("/updateClub/:clubId", updateSingleUser);

// module.exports = router;
