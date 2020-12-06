import { Request, Response } from "express";
import { Post } from "../models";

export class PostController {

    static async getAllPost(req: Request, res: Response): Promise<void> {
        try {
            const posts = await Post.find();
            res.json(posts);
            console.log(req.user)
        } catch (error) {
            res.status(400).json(error);
        }
    }

    static async addPost(req: Request, res: Response): Promise<void> {
        try {
            const title = req.body.title;
            const text = req.body.text;
            const userId = req.user?._id;

            const newPost = new Post({
                title: title,
                text: text,
                userId:userId

            })
            await newPost.save()
            res.json(newPost)
        } catch (error) {
            res.status(400).json(error);
        }
    }

    static async getPostDetail(req: Request, res: Response): Promise<void> {
        try {
            const post_title_params = req.params.title;
            const post = await Post.findOne({title:post_title_params});
            res.json(post);
        } catch (error) {
            res.status(400).json(error)
        }
    }
}