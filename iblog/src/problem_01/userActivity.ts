// solution of problem 01 and its Facade pattern

import Post from "./post";
import CommentForPost from "./comment";

type User = {
  id: string;
  name: string;
  isAdmin: boolean;
};

type PermissionPost = {
  canDropComment: boolean;
  canReactToPost: boolean;
  canSharePost: boolean;
  notifyAdmin: boolean;
  notifyFriend: boolean;
  notifyAll: boolean;
};

class userActivityFacade {
  constructor(public user: User) {
    this.user = user;
  }

  dropPost(permission: PermissionPost) {
    // Drop post
    const post = new Post();
    post.createPost();
    post.notifyAdmin(permission.notifyAdmin);
    post.notifyFriend(permission.notifyFriend);
    post.notifyAll(permission.notifyAll);
  }

  dropComment() {
    const comment = new CommentForPost();
    comment.createComment();
    comment.notifyAdmin();
    comment.notifyUser();
    comment.notifyPostOwner();
  }
}

// const post = new userActivityFacade({ id: '1', name: 'John Doe', isAdmin: true });

export default userActivityFacade;
