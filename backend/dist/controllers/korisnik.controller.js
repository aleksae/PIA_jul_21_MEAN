"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const korisnik_model_1 = __importDefault(require("../models/korisnik.model"));
class KorisnikController {
    constructor() {
        this.login = (req, res) => {
            korisnik_model_1.default.findOne({ "username": req.body.username, "password": req.body.password }, (err, resp) => {
                if (err)
                    console.log(err);
                else {
                    res.json(resp);
                }
            });
        };
        this.dohvati_za_ki = (req, res) => {
            korisnik_model_1.default.findOne({ "username": req.body.username }, (err, resp) => {
                if (err)
                    console.log(err);
                else {
                    res.json(resp);
                }
            });
        };
    }
}
exports.default = KorisnikController;
//# sourceMappingURL=korisnik.controller.js.map