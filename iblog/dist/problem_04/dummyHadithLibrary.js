"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hadithStore = ["", "a hadith"];
class IHadith {
    constructor() {
        // 
    }
    getHadith() {
        return hadithStore[Math.floor(Math.random() * hadithStore.length)];
    }
}
exports.default = IHadith;
