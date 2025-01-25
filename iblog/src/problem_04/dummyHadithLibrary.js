"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hadithStore = ["", "a hadith"];
var IHadith = /** @class */ (function () {
    function IHadith() {
        // 
    }
    IHadith.prototype.getHadith = function () {
        return hadithStore[Math.floor(Math.random() * hadithStore.length)];
    };
    return IHadith;
}());
exports.default = IHadith;
