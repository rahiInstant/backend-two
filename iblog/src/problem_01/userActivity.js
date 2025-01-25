"use strict";
// solution of problem 01 and its Facade pattern
Object.defineProperty(exports, "__esModule", { value: true });
var post_1 = require("./post");
var comment_1 = require("./comment");
var userActivityFacade = /** @class */ (function () {
    function userActivityFacade(user) {
        this.user = user;
        this.user = user;
    }
    userActivityFacade.prototype.dropPost = function (permission) {
        // Drop post
        var post = new post_1.default();
        post.createPost();
        post.notifyAdmin(permission.notifyAdmin);
        post.notifyFriend(permission.notifyFriend);
        post.notifyAll(permission.notifyAll);
    };
    userActivityFacade.prototype.dropComment = function () {
        var comment = new comment_1.default();
        comment.createComment();
        comment.notifyAdmin();
        comment.notifyUser();
        comment.notifyPostOwner();
    };
    return userActivityFacade;
}());
// const post = new userActivityFacade({ id: '1', name: 'John Doe', isAdmin: true });
exports.default = userActivityFacade;
