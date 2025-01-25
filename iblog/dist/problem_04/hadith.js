"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dummyHadithLibrary_1 = __importDefault(require("./dummyHadithLibrary"));
class HadithDaily {
    constructor() {
        //
    }
    giveHadith() {
        const hadith = new dummyHadithLibrary_1.default().getHadith();
        if (hadith) {
            return hadith;
        }
        else {
            return this.giveHadith();
        }
    }
}
exports.default = HadithDaily;
