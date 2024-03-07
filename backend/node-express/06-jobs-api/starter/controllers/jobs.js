const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

// Get All Jobs
const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt");
  res.status(StatusCodes.OK).json({ count: jobs.length, jobs });
};

// Create JOB
const createJob = async (req, res) => {
  // we are getting req.user from authentication line 16
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);

  res.status(StatusCodes.CREATED).json({ job });
};

// Get Single Job
const getJob = async (req, res) => {
  const { userId } = req.user;
  const { id: jobId } = req.params;

  const job = await Job.findOne({
    _id: jobId,
    createdBy: userId,
  });
  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }
  res.status(StatusCodes.OK).json({ job });
};

// Update Job
const updateJob = async (req, res) => {
  const { userId } = req.user;
  const { id: jobId } = req.params;
  const { company, position } = req.body;

  if (company === "" || position === "") {
    throw new BadRequestError("Company and Position fields cannot be empty");
  }

  const job = await Job.findOneAndUpdate(
    {
      _id: jobId,
      createdBy: userId,
    },
    req.body,
    { new: true, runValidators: true }
  );
  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }
  res.status(StatusCodes.OK).json({ job });
};

// Delete Job
const deleteJob = async (req, res) => {
  const { userId } = req.user;
  const { id: jobId } = req.params;

  const job = await Job.findOneAndDelete({
    _id: jobId,
    createdBy: userId,
  });
  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }
  res.status(StatusCodes.OK).json({ job });
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
