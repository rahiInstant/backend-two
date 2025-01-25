"use strict";
// solution of problem 02 and it's Factory pattern
Object.defineProperty(exports, "__esModule", { value: true });
class reputationFactory {
    user;
    constructor(user) {
        this.user = user;
        this.user = user;
    }
    createReputation(currentSupport) {
        if (this.user.isAdmin) {
            return new adminSupport(currentSupport);
        }
        else {
            return new userSupport(currentSupport);
        }
    }
}
class adminSupport {
    currentSupport;
    constructor(currentSupport) {
        this.currentSupport = currentSupport;
        this.currentSupport = currentSupport;
    }
    giveReputation() {
        return (this.currentSupport += 5);
    }
}
class userSupport {
    currentSupport;
    constructor(currentSupport) {
        this.currentSupport = currentSupport;
        this.currentSupport = currentSupport;
    }
    giveReputation() {
        return (this.currentSupport += 1);
    }
}
exports.default = reputationFactory;
