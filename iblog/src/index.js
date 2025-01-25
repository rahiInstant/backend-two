"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var userActivity_1 = require("./problem_01/userActivity");
var reputationFactory_1 = require("./problem_02/reputationFactory");
var postDetail_1 = require("./problem_03/postDetail");
var hadith_1 = require("./problem_04/hadith");
// ===========>>decleared all global variable
var app = express();
var port = process.env.PORT || 3000;
// ===========>>middleware
app.use(express.json());
// type User = {
//   id: string; 
//   name: string;
//   isAdmin: boolean;
// };
// ================== POST ==================
app.post("/post", function (req, res) {
    var _a = req.query, user_id = _a.user_id, name = _a.name, isAdmin = _a.isAdmin;
    var reqBody = req.body;
    if (typeof user_id == "string" &&
        typeof name == "string" &&
        typeof isAdmin == "boolean") {
        var post = new userActivity_1.default({ id: user_id, name: name, isAdmin: isAdmin });
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
app.post("/post/:id/comment", function (req, res) {
    var _a = req.query, user_id = _a.user_id, name = _a.name, isAdmin = _a.isAdmin;
    if (typeof user_id == "string" &&
        typeof name == "string" &&
        typeof isAdmin == "boolean") {
        var post = new userActivity_1.default({ id: user_id, name: name, isAdmin: isAdmin });
        post.dropComment();
        res.status(200).send({ success: true });
    }
    res.status(404).send({ success: false });
});
// ================== SUPPORT ==================
app.post("/post/:id/support", function (req, res) {
    var _a = req.query, user_id = _a.user_id, name = _a.name, isAdmin = _a.isAdmin;
    if (typeof user_id == "string" &&
        typeof name == "string" &&
        typeof isAdmin == "boolean") {
        var currentReputation = 2;
        var reputation = new reputationFactory_1.default({
            id: user_id,
            name: name,
            isAdmin: isAdmin,
        }).createReputation(currentReputation);
        reputation.giveReputation();
        res.status(200).send({ success: true });
    }
});
// ================== POST DETAIL ==================
app.post("/post/:id/detail", function (req, res) {
    var postId = req.query.postId;
    if (typeof postId == "string") {
        var cache = {
            get: function (postId) {
                return {};
            },
            put: function (data) {
                return {};
            },
            exist: function (postId) {
                return true;
            },
        };
        var detail = new postDetail_1.default(cache);
        res.status(200).send(detail.getDetails(postId));
    }
});
// ================== HADITH ==================
app.get('/hadith', function (req, res) {
    var hadith = new hadith_1.default().giveHadith();
    res.send({ hadith: hadith });
});
// app.post("/post/:id");
app.get("/", function (req, res) {
    res.send("Hello World");
});
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
