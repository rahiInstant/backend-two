"use strict";
// solution of problem 01 and its Facade pattern
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = __importDefault(require("./post"));
const comment_1 = __importDefault(require("./comment"));
class userActivityFacade {
    user;
    constructor(user) {
        this.user = user;
        this.user = user;
    }
    dropPost(permission) {
        // Drop post
        const post = new post_1.default();
        post.createPost();
        post.notifyAdmin(permission.notifyAdmin);
        post.notifyFriend(permission.notifyFriend);
        post.notifyAll(permission.notifyAll);
    }
    dropComment() {
        const comment = new comment_1.default();
        comment.createComment();
        comment.notifyAdmin();
        comment.notifyUser();
        comment.notifyPostOwner();
    }
}
// const post = new userActivityFacade({ id: '1', name: 'John Doe', isAdmin: true });
exports.default = userActivityFacade;
