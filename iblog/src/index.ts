// const express = require("express");
import express from "express";
import { Request, Response } from "express";
import userActivityFacade from "./problem_01/userActivity";
import reputationFactory from "./problem_02/reputationFactory";
import PostDetails from "./problem_03/postDetail";
import HadithDaily from "./problem_04/hadith";

// ===========>>decleared all global variable
const app = express();
const port = process.env.PORT || 3000;

// ===========>>middleware
app.use(express.json()); 

// type User = {
//   id: string; 
//   name: string;
//   isAdmin: boolean;
// };

// ================== POST ==================
app.post("/post", (req: Request, res: Response) => {
  const { user_id, name, isAdmin } = req.query;
  const reqBody = req.body;
  if (
    typeof user_id == "string" &&
    typeof name == "string" &&
    typeof isAdmin == "boolean"
  ) {
    const post = new userActivityFacade({ id: user_id, name, isAdmin });
    post.dropPost({
      canDropComment: reqBody.canDropComment,
      canReactToPost: reqBody.canReactToPost,
      canSharePost: reqBody.canSharePost,
      notifyAdmin: reqBody.notifyAdmin,
      notifyFriend: reqBody.notifyFriend,
      notifyAll: reqBody.notifyAll,
    });
    res.status(200).send({ success: true });
  }
  res.status(404).send({ success: false });
});

// ================== COMMENT ==================
app.post("/post/:id/comment", (req: Request, res: Response) => {
  const { user_id, name, isAdmin } = req.query;
  if (
    typeof user_id == "string" &&
    typeof name == "string" &&
    typeof isAdmin == "boolean"
  ) {
    const post = new userActivityFacade({ id: user_id, name, isAdmin });
    post.dropComment();
    res.status(200).send({ success: true });
  }
  res.status(404).send({ success: false });
});

// ================== SUPPORT ==================
app.post("/post/:id/support", (req: Request, res: Response) => {
  const { user_id, name, isAdmin } = req.query;
  if (
    typeof user_id == "string" &&
    typeof name == "string" &&
    typeof isAdmin == "boolean"
  ) {
    const currentReputation = 2;
    const reputation = new reputationFactory({
      id: user_id,
      name,
      isAdmin,
    }).createReputation(currentReputation);
    reputation.giveReputation();
    res.status(200).send({ success: true });
  }
});

// ================== POST DETAIL ==================
app.post("/post/:id/detail", (req: Request, res: Response) => {
  const { postId } = req.query;
  if (typeof postId == "string") {
    var cache = {
      get(postId: string): object {
        return {};
      },
      put(data: object): object {
        return {};
      },
      exist(postId: string): boolean {
        return true;
      },
    };
    const detail = new PostDetails(cache);
    res.status(200).send(detail.getDetails(postId));
  }
});

// ================== HADITH ==================
app.get('/hadith', (req:Request, res:Response) => {
  const hadith = new HadithDaily().giveHadith()
  res.send({hadith})
})

// app.post("/bundles/:id");



app.get("/", (req:Request, res:Response) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
   