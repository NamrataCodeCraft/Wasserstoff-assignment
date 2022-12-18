const mongoose = require("mongoose");
const studentModel = require("../models/studentModel");

const createStudent = async function (req, res) {
  const { name, topic, summery } = req.body;
  if (Object.keys(req.body).length == 0) return res.status(400).send({ status: false, message: "All fields are mandatory to fill" });


  if (!name || name.trim().length == 0) return res.status(400).send({ status: false, message: "Name block is mandatory to fill" });

  if (!/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(name)) return res.status(400).send({ status: false, message: "Only letters are acceptable " });

  if (!topic || topic.trim().length == 0) return res.status(400).send({ status: false, message: "Please fill any topic" });

  if (!summery || summery.trim().length == 0) return res.status(400).send({ status: false, message: "Please fill the summery field" });

  const student = await studentModel.findOne({ name });

  if (student) return res.status(400).send({ status: false, message: `${name} is already present` });

  req.body.topics = { topic, summery };
  delete req.body.topic;
  delete req.body.summery;

  const studentCreation = await studentModel.create(req.body);
  return res.status(201).send({ status: true, message: studentCreation });
};


//______________________________________________________________________________________


const addTopic = async function (req, res) {
  const { topic, summery } = req.body;
  const studentId = req.params.Id;

  if (!mongoose.isValidObjectId(studentId)) return res.status(400).send({ status: false, message: "Invalid Id" });

  const studendFind = await studentModel.findById({ _id: studentId });

  if (!studendFind) return res.status(404).send({ status: false, message: "Student Not found" });

  if (Object.keys(req.body).length == 0) return res.status(400).send({ status: false, message: "Please enter all fields" });

  if (!topic || topic.trim().length == 0) return res.status(400).send({ status: false, message: "Please enter topic" });

  if (!summery || summery.trim().length == 0) return res.status(400).send({ status: false, message: "Please enter summery also" });


  let data = { topic, summery }

  const topicadding = await studentModel.findByIdAndUpdate({ _id: studentId }, { $push: { topics: data } }, { new: true });

  return res.status(200).send({ status: true, message: topicadding });
};


//___________________________________________________________________________________________

const getStudent = async function (req, res) {

  const { student } = req.params

  if (!student) return res.status(400).send({ status: false, message: "Please Provide Student's Name" })

  const findStudent = await studentModel.findOne({ name:student })

  if (!findStudent) return res.status(404).send({ status: false, message: "Student not found!!!" })

  return res.status(200).send({ status: true, message: findStudent })



}
module.exports = { createStudent, addTopic, getStudent };
