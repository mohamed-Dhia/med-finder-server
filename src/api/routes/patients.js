// const { Router } = require("express");                          ***auth route is reponsible of this***
// const middlewares = require("../middlewares");
// const bodyParser = require("body-parser");
// const PatientServices = require("../../services/patientServices");

// const route = Router();

// const patientRoute = app => {
//   app.use(
//     bodyParser.urlencoded({
//       extended: true
//     })
//   );
//   app.use(bodyParser.json());
//   app.use("/patient", route);
//   route.get("/", (req, res) => console.log(" \n patient route working"));
//   const patientServicesInstance = new PatientServices();

//   route.post("/register", async (req, res, next) => {
//     // console.log("req body", req.body);
//     const patientInput = { ...req.body };

//     patientServicesInstance
//       .createPatient(patientInput)
//       .then(data => console.log(data, "created patient"))
//       .catch(err => console.log(err));
//     return res.status(200);
//   });
// };

// module.exports = patientRoute;
