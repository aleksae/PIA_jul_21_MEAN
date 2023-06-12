"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ostalo_controller_1 = __importDefault(require("../controllers/ostalo.controller"));
const ostaloRouter = express_1.default.Router();
ostaloRouter.route('/sve_prijave_za_usera').post((req, res) => {
    new ostalo_controller_1.default().sve_prijave_za_usera(req, res);
});
ostaloRouter.route('/sve_prijave_za_mesto').post((req, res) => {
    new ostalo_controller_1.default().sve_prijave_za_mesto(req, res);
});
ostaloRouter.route('/dohvati_polaganje').post((req, res) => {
    new ostalo_controller_1.default().dohvati_polaganje(req, res);
});
ostaloRouter.route('/mesto_za_id').post((req, res) => {
    new ostalo_controller_1.default().mesto_za_id(req, res);
});
ostaloRouter.route('/sva_mesta').post((req, res) => {
    new ostalo_controller_1.default().sva_mesta(req, res);
});
ostaloRouter.route('/dodaj_prijavu').post((req, res) => {
    new ostalo_controller_1.default().dodaj_prijavu(req, res);
});
ostaloRouter.route('/dodaj_polaganje').post((req, res) => {
    new ostalo_controller_1.default().dodaj_polaganje(req, res);
});
exports.default = ostaloRouter;
//# sourceMappingURL=ostalo.router.js.map