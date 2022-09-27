import express from "express"
import { employeesController } from "../controllers/index.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.get("/", employeesController.getAllEmployee)
router.post("/", authMiddleware, employeesController.createNewEmployee)
router.get("/:id", employeesController.getEmployeeById)
router.delete("/:id", authMiddleware, employeesController.deleteEmployeeById)
router.patch("/:id", employeesController.editEmployeeById)

export default router
