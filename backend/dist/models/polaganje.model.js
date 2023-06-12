"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Polaganje = new Schema({
    idPolaganja: {
        type: Number
    },
    idPrijave: {
        type: Number
    },
    brojPoena: {
        type: Number
    },
    datum: {
        type: String
    },
    polozio: {
        type: Number
    },
    inspektor: {
        type: String
    }
});
exports.default = mongoose_1.default.model("PolaganjeModel", Polaganje, 'polaganje');
//# sourceMappingURL=polaganje.model.js.map