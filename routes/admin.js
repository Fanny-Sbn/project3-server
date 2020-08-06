const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Machine = require("../models/Machine");
const PointOfSale = require("../models/PointOfSale");
const Intervention = require("../models/Intervention");

router.get('/all-clients', (req, res) => {
    User
        .find({ role: "client" }).populate({ path: 'pointsOfSale', populate: { path: 'machines' } })
        .then((userDocument) => {
            res.status(200).json(userDocument);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
});

router.get("/points-vente", (req, res, next) => {
    PointOfSale.find()
        .then((pointOfSaleDocuments) => {
            res.status(200).json(pointOfSaleDocuments);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
});

router.get("/depannage", (req, res, next) => {
    Intervention.find({ $and: [{ title: "Demande dépannage" }, { solved: false }] }).sort({ date: -1 })
        .populate('id_machine')
        .populate('id_pointofSale')
        .populate('id_user')
        .then((intervention) => {
            res.status(201).json(intervention);
        })
        .catch((error) => res.status(500).json(error));
});

router.get("/reapprovisionnement", (req, res, next) => {
    Intervention.find({ $and: [{ title: "Demande réapprovisionnement" }, { solved: false }] }).sort({ date: -1 })
        .populate('id_machine')
        .populate('id_pointofSale')
        .populate('id_user')
        .then((intervention) => {
            res.status(201).json(intervention);
        })
        .catch((error) => res.status(500).json(error));
});

router.get("/reglages", (req, res, next) => {
    Intervention
        .find({ $and: [{ title: "Demande réglages" }, { solved: false }] }).sort({ date: -1 })
        .populate('id_machine')
        .populate('id_pointofSale')
        .populate('id_user')
        .then((intervention) => {
            res.status(201).json(intervention);
        })
        .catch((error) => res.status(500).json(error));
});

router.get("/entretien", (req, res, next) => {
    Intervention.find({ $and: [{ title: "Demande entretien" }, { solved: false }] }).sort({ date: -1 })
        .populate('id_machine')
        .populate('id_pointofSale')
        .populate('id_user')
        .then((intervention) => {
            res.status(201).json(intervention);
        })
        .catch((error) => res.status(500).json(error));
});

router.get("/all-interventions", (req, res, next) => {
    Intervention.find({ solved: false }).sort({ date: -1 })
        .then((machine) => {
            res.status(201).json(machine);
        })
        .catch((error) => res.status(500).json(error));
});

//PATCH INTERVENTION

router.patch("/intervention/:id/:update", (req, res, next) => {
    oneIntervention = req.params.id
    theUpdate = req.params.update
    
    Intervention.findByIdAndUpdate(oneIntervention, { solved: true }, { new: true })
        .then((intervention) => {
            res.status(201).json(intervention);
            Intervention
                .find({ $and: [{ update: theUpdate }, { solved: false }] }).sort({ date: -1 })
                .populate('id_machine')
                .populate('id_pointofSale')
                .populate('id_user')
                .then((intervention) => {
                    res.status(201).json(intervention);
                })
                .catch((error) => res.status(500).json(error));
        })
    .catch((error) => res.status(500).json(error));
});

module.exports = router;