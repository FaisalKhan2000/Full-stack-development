const Product = require("../models/Dashboard");

const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

// Get all products
const getAllProducts = async (req, res) => {
  const { name, quantity, price, category, sort, fields } = req.query;

  const queryObject = {};

  // search
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  // filter
  if (quantity) {
    queryObject.quantity = quantity;
  }
  if (price) {
    queryObject.price = price;
  }
  if (category) {
    queryObject.category = category;
  }

  let result = Product.find(queryObject);

  // sort
  // sort =name,-price
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }

  // fields
  // fields which you to display
  // fields=name, price
  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }

  // pagination
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);

  const products = await result;

  res.status(StatusCodes.OK).json({ count: products.length, products });

  // res.status(StatusCodes.OK).json({ count: products.length, products });
};

// Create Product
const createProduct = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const product = await Product.create(req.body);

  res.status(StatusCodes.CREATED).json({ product });
};

// Get single product
const getProduct = async (req, res) => {
  const { userId } = req.user;
  const { id: productId } = req.params;

  const product = await Product.findOne({
    _id: productId,
    createdBy: userId,
  });

  if (!product) {
    throw new NotFoundError(`No product with id ${productId}`);
  }

  res.status(StatusCodes.OK).json({ product });
};

// Update products
const updateProduct = async (req, res) => {
  const { userId } = req.user;
  const { id: productId } = req.params;
  const { name, description, price, quantity, category } = req.body;

  if (
    name === "" ||
    description === "" ||
    price === "" ||
    quantity === "" ||
    category === ""
  ) {
    throw new BadRequestError("fields cannot be empty");
  }

  const product = await Product.findOneAndUpdate(
    {
      _id: productId,
      createdBy: userId,
    },
    req.body,
    { new: true, runValidators: true }
  );

  if (!product) {
    throw new NotFoundError(`No product with id ${productId}`);
  }

  res.status(StatusCodes.OK).json({ product });
};

// Delete Job
const deleteProduct = async (req, res) => {
  const { userId } = req.user;
  const { id: productId } = req.params;

  const product = await Product.findOneAndDelete({
    _id: productId,
    createdBy: userId,
  });

  if (!product) {
    throw new NotFoundError(`No product with id ${productId}`);
  }

  res.status(StatusCodes.OK).json({ product });
};

module.exports = {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
