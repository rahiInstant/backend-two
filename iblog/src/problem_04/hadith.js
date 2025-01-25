"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dummyHadithLibrary_1 = require("./dummyHadithLibrary");
var HadithDaily = /** @class */ (function () {
    function HadithDaily() {
        //
    }
    HadithDaily.prototype.giveHadith = function () {
        var hadith = new dummyHadithLibrary_1.default().getHadith();
        if (hadith) {
            return hadith;
        }
        else {
            return this.giveHadith();
        }
    };
    return HadithDaily;
}());
exports.default = HadithDaily;
