const bcrypt = require("bcrypt");
const userModel = require("../Model/Signup");
const cloudinary = require("../Utils/Cloudinary");

const createUser = async (req, res) => {
  try {
    const { fullname, email, password, phone } = req.body;

    const image = await cloudinary.uploader.upload(req.file.path);

    const saltedPassword = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, saltedPassword);
    const user = await userModel.create({
      fullname,
      email,
      password: hashPassword,
      phone,
      avatar: image.secure_url,
      avatarID: image.public_id,
    });

    res.status(200).json({ message: "User created", data: user });
    // console.log(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const findUser = async (req, res) => {
  try {
    const user = await userModel.find();
    res.status(200).json({ message: "Here is the reusult", data: user });
  } catch (error) {
    res.status(400).json({ message: error.maessage });
  }
};
const findoneUser = async (req, res) => {
  try {
    const userID = req.params.id;
    const deluser = await userModel.findById(userID);
    res.send(200).json({ message: "Here is the reusult", data: deluser });
  } catch (error) {
    res.status(400).json({ message: error.maessage });
  }
};
const deleteUser = async (req, res) => {
  try {
    const userID = req.params.id;
    const user = await userModel.findByIdAndDelete(userID);
    res.send(200).json({ message: "User deleted", data: user });
  } catch (error) {
    res.status(400).json({ message: error.maessage });
  }
};

const updateUser = async (req, res) => {
  try {
    const { fullname, email, password, phone } = req.body;
    const edit = await userModel.findByIdAndUpdate(
      req.params.id,
      { fullname, email, password, phone },
      { new: true }
    );

    res.status(200).json({ message: "User updated", data: edit });
  } catch (error) {
    res.status(400).json({ message: error.maessage });
  }
};

module.exports = {
  findUser,
  findoneUser,
  deleteUser,
  createUser,
  updateUser,
};
