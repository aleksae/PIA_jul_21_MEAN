"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const korisnik_controller_1 = __importDefault(require("../controllers/korisnik.controller"));
const korisnikRouter = express_1.default.Router();
korisnikRouter.route('/login').post((req, res) => {
    new korisnik_controller_1.default().login(req, res);
});
korisnikRouter.route('/dohvati_za_ki').post((req, res) => {
    new korisnik_controller_1.default().dohvati_za_ki(req, res);
});
exports.default = korisnikRouter;
//# sourceMappingURL=korisnik.router.js.map