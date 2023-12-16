const express = require("express");
const blogController = require("../controllers/blog")


const router = express.Router();

router.get("/", blogController.getAllBlog);
router.get("/:id", blogController.getSingleBlog);
router.post("/", blogController.createBlog);
router.put("/:id", blogController.updateBlog);
router.delete("/:id", blogController.deleteBlog);


module.exports = router;