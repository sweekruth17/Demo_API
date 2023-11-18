//res:is used to send something to the server
//req: ask server/DB something
const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  console.log("Product data:", req.query);
  const { company, name, featured, sort,select } = req.query;
  const queryObj = {};

  if (company) {
    queryObj.company = company;
    console.log(queryObj);
  }

  if (featured) {
    queryObj.featured = featured;
    console.log(queryObj);
  }

  if (name) {
    //regex in mongodb lib to match all types of iphones we have in our db
    // the below approach can be used in search functionality
    queryObj.name = { $regex: name, $options: "i" };
    console.log(queryObj);
  }
  //sorting data by taking input from url
  let sortFix;
  if (sort) {
    sortFix = sort.replaceAll(",", " ");
    //  queryObj.sort = sortFix;
    console.log("Sort data: ", sortFix);
  }

  //selecting specific fields from data by taking input from url
  let selectFix;
  if (select) {
    selectFix = select.replaceAll(",", " ");
    console.log("Select data: ", selectFix);
  }

  const myData = await Product.find(queryObj).sort(sortFix).select(selectFix);
  res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query).sort({
    price: -1,
    featured: -1,
  });
  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };


//Testing end points
//http://localhost:5000/api/products?company=mi&sort=-price&select=name,price
