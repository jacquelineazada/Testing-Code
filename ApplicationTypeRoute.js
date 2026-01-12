import express from "express";
import {
  saveApplicationType,
  getApplicationTypeById,
  updateApplicationType,
  getAllApplicationTypes,
} from "../op_controllers/ApplicationTypeController.js";

const router = express.Router();

/**
 * @route   POST /api/application-types
 * @desc    Create a new application type
 * @access  Public
 */
router.post("/", async (req, res) => {
  try {
    const toaId = await saveApplicationType(req.body);
    res.status(201).json({
      success: true,
      message: "Application type created successfully",
      data: { toa_id: toaId },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/**
 * @route   GET /api/application-types/:id
 * @desc    Get application type by ID
 * @access  Public
 */
router.get("/:id", async (req, res) => {
  try {
    const appType = await getApplicationTypeById(req.params.id);
    if (!appType) {
      return res.status(404).json({
        success: false,
        message: "Application type not found",
      });
    }
    res.status(200).json({
      success: true,
      data: appType,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/**
 * @route   PUT /api/application-types/:id
 * @desc    Update application type by ID
 * @access  Public
 */
router.put("/:id", async (req, res) => {
  try {
    const updated = await updateApplicationType(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Application type not found or update failed",
      });
    }
    res.status(200).json({
      success: true,
      message: "Application type updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/**
 * @route   GET /api/application-types
 * @desc    Get all application types
 * @access  Public
 */
router.get("/", async (req, res) => {
  try {
    const appTypes = await getAllApplicationTypes();
    res.status(200).json({
      success: true,
      data: appTypes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
