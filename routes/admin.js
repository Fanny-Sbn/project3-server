const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Machine = require("../models/Machine");
const PointOfSale = require("../models/PointOfSale");

router.get('/all-clients', (req, res) => {
    User
        .find({ role: "client" })
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
    Machine.find({ $and: [{ "intervention.title": "Demande dépannage" }, { "intervention.solved": false }] }).sort( { "intervention.date": -1 } )
        .then((machine) => {
            res.status(201).json(machine);
        })
        .catch((error) => res.status(500).json(error));
});

router.get("/reapprovisionnement", (req, res, next) => {
    Machine.find({ $and: [{ "intervention.title": "Demande réapprovisionnement" }, { "intervention.solved": false }] }).sort( { "intervention.date": -1 } )
        .then((machine) => {
            res.status(201).json(machine);
        })
        .catch((error) => res.status(500).json(error));
});

router.get("/reglages", (req, res, next) => {
    Machine
        .find({ $and: [{ "intervention.title": "Demande réglages" }, { "intervention.solved": false }] }).sort( { "intervention.date": -1 } )
        .then((machine) => {
            res.status(201).json(machine);
        })
        .catch((error) => res.status(500).json(error));
});

router.get("/entretien", (req, res, next) => {
    Machine.find({ $and: [{ "intervention.title": "Demande entretien" }, { "intervention.solved": false }] }).sort( { "intervention.date": -1 } )
        .then((machine) => {
            res.status(201).json(machine);
        })
        .catch((error) => res.status(500).json(error));
});

router.get("/all-interventions", (req, res, next) => {
    Machine.find({"intervention.solved": false }).sort( { "intervention.date": -1 } )
        .then((machine) => {
            res.status(201).json(machine);
        })
        .catch((error) => res.status(500).json(error));
});

//PATCH INTERVENTION

/* router.get("/intervention/:id", (req, res, next) => {
    oneIntervention = req.params.id
    Machine.get({"intervention._id": oneIntervention })
        .then((machine) => {
            res.status(201).json(machine);
        })
        .catch((error) => res.status(500).json(error));
}); */

module.exports = router;