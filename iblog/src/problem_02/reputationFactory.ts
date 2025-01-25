// solution of problem 02 and it's Factory pattern

interface reputation {
  giveReputation(): void;
}

type User = {
  id: string;
  name: string;
  isAdmin: boolean;
};

class reputationFactory {
  constructor(public user: User) {
    this.user = user;
  }

  createReputation(currentSupport: number): reputation {
    if (this.user.isAdmin) {
      return new adminSupport(currentSupport);
    } else {
      return new userSupport(currentSupport);
    }
  }
}

class adminSupport implements reputation {
  constructor(public currentSupport: number) {
    this.currentSupport = currentSupport;
  }
  giveReputation() {
    return (this.currentSupport += 5);
  }
}

class userSupport implements reputation {
  constructor(public currentSupport: number) {
    this.currentSupport = currentSupport;
  }
  giveReputation() {
    return (this.currentSupport += 1);
  }
}


export default reputationFactory;