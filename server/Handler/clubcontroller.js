const klubModel = require("../Model/club");

const postClub = async (req, res) => {
  try {
    const { clubName, country, networth } = req.body;

    const createClub = await klubModel.create({
      clubName,
      country,
      networth,
    });
    res
      .status(201)
      .json({ message: "newclub successfully created", data: createClub });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllclub = async (req, res) => {
  try {
    const clubs = await klubModel.find();
    res
      .status(200)
      .json({ message: "Here is the list of all clubs", data: clubs });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getoneclub = async (req, res) => {
  try {
    const clubId = req.params.clubId;
    const oneclub = await klubModel.findById(clubId);
    res
      .status(200)
      .json({ message: "Here is the list of all clubs", data: oneclub });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const deleteoneclub = async (req, res) => {
  try {
    const clubId = req.params.clubId;
    const delclub = await klubModel.findByIdAndDelete(clubId);
    res.status(200).json({ message: "club deleted", data: delclub });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// const updateClub = async (req, res) => {
//   try {
//     clubId = req.params.clubId;
//     const { country, networth } = req.body;
//     const updateone = await klubModel.findByIdAndUpdate(
//       clubId,
//       { clubName, country, networth },
//       { new: true }
//     );
//     res
//       .status(200)
//       .json({ message: `The club with ${clubId} is update`, data: updateone });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

const updateSingleUser = async (req, res) => {
  try {
    const { clubName } = req.body;
    const user = await klubModel.findByIdAndUpdate(
      req.params.id,
      { clubName },
      { new: true }
    );
    res.status(200).json({ message: "user updated", data: user });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
module.exports = {
  postClub,
  getAllclub,
  getoneclub,
  deleteoneclub,
  updateSingleUser,
};
