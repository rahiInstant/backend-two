
type cacheType = {
    get(postId:string):object
    put(data:object):object
    exist(postId:string):boolean
}

class PostDetails {
    constructor(public cache:cacheType) {
        this.cache = cache
    }

    getDetails(postId:string):object {
        if(this.cache.exist(postId)) return {}
        let data:object = this.cache.get(postId)
        this.cache.put(data)
        return data
    }
}

export default PostDetails






