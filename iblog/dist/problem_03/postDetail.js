"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostDetails {
    cache;
    constructor(cache) {
        this.cache = cache;
        this.cache = cache;
    }
    getDetails(postId) {
        if (this.cache.exist(postId))
            return {};
        let data = this.cache.get(postId);
        this.cache.put(data);
        return data;
    }
}
exports.default = PostDetails;
