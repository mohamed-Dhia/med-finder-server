const { Router } = require("express");
const passport = require("passport");
const { appointmentServices } = require("../../services");

const route = Router();
const appointmentRoute = app => {
  app.use("/appointment", route);

  route.post(
    "/booking/:doctorId/:date",
    passport.authenticate("jwt", {
      session: false
    }),
    (req, res) => {
      if (req.authInfo !== "patient")
        return res.status(400).send("not a patient");
      const newAppointmentServices = new appointmentServices(req.params);
      newAppointmentServices.book(req.user._id, (err, pescription) => {
        if (err) return res.send(err);
        return res.send(pescription);
      });
    }
  );

  route.post(
    "/approve/:appointmentId",
    passport.authenticate("jwt", {
      session: false
    }),
    (req, res) => {
      if (req.authInfo !== "doctor") {
        return res.status(400).send("not a doctor");
      }
      const newAppointmentServices = new appointmentServices(req.params);
      newAppointmentServices.approve(req.user._id, (err, msg) => {
        if (err) return res.send(err);
        return res.send(msg);
      });
    }
  );
  route.get(
    "/get/:date/:confirmedState",
    passport.authenticate("jwt", {
      session: false
    }),
    (req, res) => {
      if (req.authInfo !== "doctor" && req.authInfo !== "patient")
        return res.status(400).send("not a doctor or a patient");
      const newAppointmentServices = new appointmentServices(req.params);
      newAppointmentServices.getAll(req.user._id, (err, msg) => {
        if (err) return res.send(err);
        return res.send(msg);
      });
    }
  );
};

module.exports = appointmentRoute;
