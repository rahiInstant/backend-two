class Post {
  title: string;
  content: string;
  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}

abstract class PostFilter {
  protected nextFilter: PostFilter | null = null;

  setNextFilter(filter: PostFilter): PostFilter {
    this.nextFilter = filter;
    return this.nextFilter;
  }

  handle(post: Post): void {
    if (this.nextFilter) {
      this.nextFilter.handle(post);
    } else {
      console.log("Everything is fine");
    }
  }
}

class GramerFilter extends PostFilter {
  gramarlyCheck(post: Post): boolean {
    return true;
  }
  handle(post: Post): void {
    if (this.gramarlyCheck(post)) {
      console.log("gramarly check passed");
      super.handle(post);
    } else {
      console.log("gramarly check failed");
    }
  }
}

class BrevityFilter extends PostFilter {
    brevityCheckByGemini(post: Post): boolean {
        return true;
    }
    handle(post: Post): void {
        if (this.brevityCheckByGemini(post)) {
        console.log("brevity check passed");
        super.handle(post);
        } else {
        console.log("brevity check failed");
        }
    }
}

class NoPlagiarism extends PostFilter {
  noCopyCheck(post: Post): boolean {
    return true;
  }
  handle(post: Post): void {
    if (this.noCopyCheck(post)) {
      console.log("no copy check passed");
      super.handle(post);
    } else {
      console.log("no copy check failed");
    }
  }
}

// const newPost = new Post("dummyTitle", "dummyContent");
// const gramerFilter = new GramerFilter();
// const brevityFilter = new BrevityFilter();
// const noPlagiarism = new NoPlagiarism();

// gramerFilter.setNextFilter(brevityFilter).setNextFilter(noPlagiarism);
// gramerFilter.handle(newPost);

export default PostFilter;

