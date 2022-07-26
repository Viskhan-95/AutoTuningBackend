const { Router } = require("express");

const { servicesController } = require("../controllers/services.controller");
const fileMiddleware = require("../middleware/fileMiddleWare");
const authMiddleware = require("../middleware/authMiddleware")

const router = Router();

router.get("/services", servicesController.getServices);
router.post("/services", authMiddleware, fileMiddleware.single("images"), servicesController.createServices);
router.patch("/services/:id", authMiddleware, servicesController.updateServices);
router.delete("/services/:id", authMiddleware, servicesController.deleteServices);
router.get("/services/:id",servicesController.getServicesById)

module.exports = router;
