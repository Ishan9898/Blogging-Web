import express from "express";
import { SearchBlogs, blogPost
    , deleteBlog, getAllBlogs, getMyBlogs, getSingleBlog, updateBlog
 } from "../controllers/dataController.js";
import { isAuthenticated,isAuthorized } from "../middlewares/auth.js";
const router = express.Router();
router.post("/post",isAuthenticated,isAuthorized("Author"),blogPost);
router.delete("/delete/:id",isAuthenticated,isAuthorized("Author"),deleteBlog);
router.get("/all",getAllBlogs);
router.get("/about/:id",isAuthenticated,getSingleBlog);
router.get("/mydata",isAuthenticated,isAuthorized("Author"),getMyBlogs);
router.put("/update/:id",isAuthenticated,isAuthorized("Author"),updateBlog);
router.get("/search",SearchBlogs);

export default router;
