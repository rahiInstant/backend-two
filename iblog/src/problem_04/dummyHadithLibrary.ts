
const hadithStore = ["","a hadith"]

class IHadith {
    constructor() {
        // 
    }

    getHadith():string {
        return hadithStore[Math.floor(Math.random()*hadithStore.length)]
    }
}

export default IHadith