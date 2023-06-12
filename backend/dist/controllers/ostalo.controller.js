"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mesto_model_1 = __importDefault(require("../models/mesto.model"));
const polaganje_model_1 = __importDefault(require("../models/polaganje.model"));
const prijava_model_1 = __importDefault(require("../models/prijava.model"));
class OstaloController {
    constructor() {
        this.sve_prijave_za_usera = (req, res) => {
            prijava_model_1.default.find({ 'username': req.body.username }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    return res.json(resp);
            });
        };
        this.sve_prijave_za_mesto = (req, res) => {
            prijava_model_1.default.find({ 'mesto': req.body.mesto }, (err, resp) => {
                if (err)
                    console.log(err);
                else {
                    res.json(resp);
                }
            });
        };
        this.dohvati_polaganje = (req, res) => {
            polaganje_model_1.default.findOne({ 'idPrijave': req.body.idPrijave }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    return res.json(resp);
            });
        };
        this.mesto_za_id = (req, res) => {
            mesto_model_1.default.findOne({ 'idMesto': req.body.idMesto }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    return res.json(resp);
            });
        };
        this.sva_mesta = (req, res) => {
            mesto_model_1.default.find({}, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    return res.json(resp);
            });
        };
        this.dodaj_prijavu = (req, res) => {
            prijava_model_1.default.find({}, (err, resp) => {
                if (err) { }
                else {
                    let max_id = 0;
                    for (let r of resp) {
                        if (r['idPrijava'] > max_id)
                            max_id = r['idPrijava'];
                    }
                    let prijava = new prijava_model_1.default({
                        idPrijava: (max_id + 1),
                        vrsta: req.body.vrsta,
                        mesto: req.body.mesto,
                        username: req.body.username,
                        status: req.body.status
                    });
                    prijava.save((err, respp) => {
                        if (err) { }
                        else
                            res.json({ "message": "ok" });
                    });
                }
            });
        };
        this.dodaj_polaganje = (req, res) => {
            polaganje_model_1.default.find({}, (err, resp) => {
                if (err) { }
                else {
                    let max_id = 0;
                    for (let r of resp) {
                        if (r['idPolaganja'] > max_id)
                            max_id = r['idPolaganja'];
                    }
                    let prijava = new polaganje_model_1.default({
                        idPolaganja: (max_id + 1),
                        idPrijave: req.body.idPrijave,
                        brojPoena: req.body.brojPoena,
                        datum: req.body.datum,
                        polozio: req.body.polozio,
                        inspektor: req.body.inspektor
                    });
                    prijava.save((err, respp) => {
                        if (err) { }
                        else {
                            if (prijava.polozio == 1) {
                                prijava_model_1.default.updateOne({ 'idPrijava': req.body.idPrijave }, { $set: { 'status': 1 } }, (err, resp) => {
                                    if (err)
                                        console.log(err);
                                    else
                                        res.json({ "message": "ok" });
                                });
                            }
                        }
                    });
                }
            });
        };
        this.azuriraj_prijavu = (req, res) => {
        };
    }
}
exports.default = OstaloController;
//# sourceMappingURL=ostalo.controller.js.map