"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Prijava = new Schema({
    idPrijava: {
        type: Number
    },
    vrsta: {
        type: String
    },
    mesto: {
        type: Number
    },
    username: {
        type: String
    },
    status: {
        type: Number
    }
});
exports.default = mongoose_1.default.model("PrijavaModel", Prijava, 'prijava');
//# sourceMappingURL=prijava.model.js.map