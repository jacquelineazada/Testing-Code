import express from "express";
import {
  saveOpamSupervisor,
  getOpamSupervisorById,
  updateOpamSupervisor,
  getAllOpamSupervisors,
  searchOpamSupervisorByPrcNo,
} from "../op_controllers/OpamSupervisorsController.js";

const router = express.Router();

/**
 * @route   POST /api/opam-supervisors
 * @desc    Create a new OPAM supervisor
 * @access  Public
 */
router.post("/", async (req, res) => {
  try {
    const opamSupervisorId = await saveOpamSupervisor(req.body);
    res.status(201).json({
      success: true,
      message: "OPAM supervisor created successfully",
      data: { opam_supervisor_id: opamSupervisorId },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/**
 * @route   GET /api/opam-supervisors/:id
 * @desc    Get OPAM supervisor by ID
 * @access  Public
 */
router.get("/:id", async (req, res) => {
  try {
    const supervisor = await getOpamSupervisorById(req.params.id);
    if (!supervisor) {
      return res.status(404).json({
        success: false,
        message: "OPAM supervisor not found",
      });
    }
    res.status(200).json({
      success: true,
      data: supervisor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/**
 * @route   PUT /api/opam-supervisors/:id
 * @desc    Update OPAM supervisor by ID
 * @access  Public
 */
router.put("/:id", async (req, res) => {
  try {
    const updated = await updateOpamSupervisor(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "OPAM supervisor not found or update failed",
      });
    }
    res.status(200).json({
      success: true,
      message: "OPAM supervisor updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/**
 * @route   GET /api/opam-supervisors
 * @desc    Get all OPAM supervisors
 * @access  Public
 */
router.get("/", async (req, res) => {
  try {
    const supervisors = await getAllOpamSupervisors();
    res.status(200).json({
      success: true,
      data: supervisors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/**
 * @route   GET /api/opam-supervisors/prc/:prcNo
 * @desc    Search OPAM supervisors by PRC number
 * @access  Public
 */
router.get("/prc/:prcNo", async (req, res) => {
  try {
    const supervisors = await searchOpamSupervisorByPrcNo(req.params.prcNo);
    res.status(200).json({
      success: true,
      data: supervisors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
