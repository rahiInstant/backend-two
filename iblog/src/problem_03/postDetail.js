"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PostDetails = /** @class */ (function () {
    function PostDetails(cache) {
        this.cache = cache;
        this.cache = cache;
    }
    PostDetails.prototype.getDetails = function (postId) {
        if (this.cache.exist(postId))
            return {};
        var data = this.cache.get(postId);
        this.cache.put(data);
        return data;
    };
    return PostDetails;
}());
exports.default = PostDetails;
