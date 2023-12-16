const Blog = require("../models/blog");

module.exports.getAllBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json({
      status: "OK",
      blogs,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    res.status(200).json({
      status: "OK",
      blog,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.createBlog = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const newBlog = await Blog.create({ title, description, image });

    res.status(200).json({
      status: "OK",
      newBlog,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image } = req.body;
    const updateBlog = await Blog.findByIdAndUpdate(
      id,
      { title, description, image },
      { new: true }
    );

    res.status(200).json({
      status: "OK",
      updateBlog,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBlog = await Blog.findByIdAndDelete(id);

    res.status(200).json({
      status: "OK",
      deleteBlog,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
