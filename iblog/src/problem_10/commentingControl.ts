class Mutex {
  private locked: boolean = false;
  public async lock(): Promise<void> {
    while (this.locked) {
      await new Promise((resolve) => setTimeout(resolve, 1));
    }
    this.locked = true;
  }
  public unlock(): void {
    this.locked = false;
  }
}

class Status {
  private static instance: Status;
  private static mutex = new Mutex();
  protected commentStatus: boolean = false;
  private constructor() {
    console.log("CommentStatus instance created");
  }
  public static async getInstance(): Promise<Status> {
    Status.mutex.lock();
    try {
      if (!Status.instance) {
        Status.instance = new Status();
      }

      return Status.instance;
    } finally {
      Status.mutex.unlock();
    }
  }

  public changeCommentStatus(newStatus: boolean): boolean {
    this.commentStatus = newStatus;
    return this.commentStatus;
  }
}

class ChangeStatus {
  constructor(protected status: boolean) {
    this.status = status;
  }
  public async changeStatus() {
    const statusInstance = await Status.getInstance();
    const currentStatus = statusInstance.changeCommentStatus(this.status);
    return currentStatus;
  }
}

// const statusChange = new ChangeStatus(false)
// statusChange.changeStatus().then((status) => {
//   console.log(status)
// })
export { ChangeStatus };
