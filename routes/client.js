const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Machine = require("../models/Machine");
const PointOfSale = require("../models/PointOfSale");
const upload = require("../config/cloudinary");

router.patch("/", (req, res, next) => {
    const userId = req.session.currentUser._id;
    User.findByIdAndUpdate(userId, req.body, { new: true })
        .then((userDocument) => {
            const userObj = userDocument.toObject();
            delete userObj.password;
            req.session.currentUser = userObj; // update the user in session.
            res.status(200).json(userObj);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json(error);
        });
});

router.get("/point-vente", (req, res, next) => {
    const currentUserId = req.session.currentUser._id;
    PointOfSale.find({ id_user: currentUserId })
        .then((pointOfSaleDocuments) => {
            res.status(200).json(pointOfSaleDocuments);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
});

router.post("/creation-point-vente", (req, res, next) => {
    const updateValues = { ...req.body };  
    updateValues.id_user = req.session.currentUser._id;
  
    PointOfSale.create(updateValues)
      .then((pointOfSaleDocument) => {
        pointOfSaleDocument
          .populate("id_user").execPopulate() 
          .then((pointOfSale) => {
            res.status(201).json(pointOfSale);
          })
          .catch((error) => res.status(500).json(error));
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  });

/* router.get("/client/pointOfSale/machine", (req, res, next) => {
    const currentUserId = req.session.currentUser._id;
    Machine.find({ id_user: currentUserId })
      .then((itemDocuments) => {
        res.status(200).json(itemDocuments);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }); */

  /* router.patch("/me", upload.single("profileImg"), (req, res, next) => {
    const userId = req.session.currentUser._id;
  
    // If no file is sent, req.file is undefined, leading to an error when trying to
    // acces req.file.path (undefined.path) => Cannot read property path of undefined.
    if (req.file) {
      req.body.profileImg = req.file.path; // Add profileImage key to req.body
    }
  
    User.findByIdAndUpdate(userId, req.body, { new: true })
      .then((userDocument) => {
        const userObj = userDocument.toObject();
        delete userObj.password;
        req.session.currentUser = userObj; // update the user in session.
        res.status(200).json(userObj);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json(error);
      });
  }); */

module.exports = router;