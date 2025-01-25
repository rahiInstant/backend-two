"use strict";
// solution of problem 02 and it's Factory pattern
Object.defineProperty(exports, "__esModule", { value: true });
var reputationFactory = /** @class */ (function () {
    function reputationFactory(user) {
        this.user = user;
        this.user = user;
    }
    reputationFactory.prototype.createReputation = function (currentSupport) {
        if (this.user.isAdmin) {
            return new adminSupport(currentSupport);
        }
        else {
            return new userSupport(currentSupport);
        }
    };
    return reputationFactory;
}());
var adminSupport = /** @class */ (function () {
    function adminSupport(currentSupport) {
        this.currentSupport = currentSupport;
        this.currentSupport = currentSupport;
    }
    adminSupport.prototype.giveReputation = function () {
        return (this.currentSupport += 5);
    };
    return adminSupport;
}());
var userSupport = /** @class */ (function () {
    function userSupport(currentSupport) {
        this.currentSupport = currentSupport;
        this.currentSupport = currentSupport;
    }
    userSupport.prototype.giveReputation = function () {
        return (this.currentSupport += 1);
    };
    return userSupport;
}());
exports.default = reputationFactory;
