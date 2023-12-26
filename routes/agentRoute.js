const express = require("express");
const agentRoute = express.Router();
const { agentAuthMiddleware } = require("../middleware/authMiddleware");
const { addEntity, listEntity } = require("../controllers/agentController");

agentRoute.get("/entity", listEntity);
agentRoute.post("/add-entity", addEntity);

module.exports = agentRoute;
