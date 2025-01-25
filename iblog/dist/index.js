"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
const express_1 = __importDefault(require("express"));
const userActivity_1 = __importDefault(require("./problem_01/userActivity"));
const reputationFactory_1 = __importDefault(require("./problem_02/reputationFactory"));
const postDetail_1 = __importDefault(require("./problem_03/postDetail"));
const hadith_1 = __importDefault(require("./problem_04/hadith"));
// ===========>>decleared all global variable
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// ===========>>middleware
app.use(express_1.default.json());
// type User = {
//   id: string; 
//   name: string;
//   isAdmin: boolean;
// };
// ================== POST ==================
app.post("/post", (req, res) => {
    const { user_id, name, isAdmin } = req.query;
    const reqBody = req.body;
    if (typeof user_id == "string" &&
        typeof name == "string" &&
        typeof isAdmin == "boolean") {
        const post = new userActivity_1.default({ id: user_id, name, isAdmin });
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
app.post("/post/:id/comment", (req, res) => {
    const { user_id, name, isAdmin } = req.query;
    if (typeof user_id == "string" &&
        typeof name == "string" &&
        typeof isAdmin == "boolean") {
        const post = new userActivity_1.default({ id: user_id, name, isAdmin });
        post.dropComment();
        res.status(200).send({ success: true });
    }
    res.status(404).send({ success: false });
});
// ================== SUPPORT ==================
app.post("/post/:id/support", (req, res) => {
    const { user_id, name, isAdmin } = req.query;
    if (typeof user_id == "string" &&
        typeof name == "string" &&
        typeof isAdmin == "boolean") {
        const currentReputation = 2;
        const reputation = new reputationFactory_1.default({
            id: user_id,
            name,
            isAdmin,
        }).createReputation(currentReputation);
        reputation.giveReputation();
        res.status(200).send({ success: true });
    }
});
// ================== POST DETAIL ==================
app.post("/post/:id/detail", (req, res) => {
    const { postId } = req.query;
    if (typeof postId == "string") {
        var cache = {
            get(postId) {
                return {};
            },
            put(data) {
                return {};
            },
            exist(postId) {
                return true;
            },
        };
        const detail = new postDetail_1.default(cache);
        res.status(200).send(detail.getDetails(postId));
    }
});
// ================== HADITH ==================
app.get('/hadith', (req, res) => {
    const hadith = new hadith_1.default().giveHadith();
    res.send({ hadith });
});
// app.post("/post/:id");
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
