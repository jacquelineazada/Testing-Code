import pool from "../congig/database.js";

/**
 * Save a new OPAM supervisor record
 * @param {Object} supervisorData - The supervisor data
 * @returns {Promise<number>} The newly created opam_supervisor_id
 */
export const saveOpamSupervisor = async (supervisorData) => {
  const {
    lastname,
    firstname,
    middlename,
    prc_no,
    validity,
    ptr_no,
    issued_date,
    issued_at,
    tin_no,
    ctc_no,
  } = supervisorData;

  try {
    await pool.query(
      `CALL sp_InsertOpamSupervisor(?, ?, ?, ?, ?, ?, ?, ?, ?, @p_opam_supervisor_id)`,
      [
        lastname,
        firstname,
        middlename,
        prc_no,
        validity,
        ptr_no,
        issued_date,
        issued_at,
        tin_no,
        ctc_no,
      ]
    );

    const [rows] = await pool.query(
      `SELECT @p_opam_supervisor_id AS opam_supervisor_id`
    );

    return rows[0].opam_supervisor_id;
  } catch (error) {
    throw new Error(`Error saving OPAM supervisor: ${error.message}`);
  }
};

/**
 * Get OPAM supervisor by ID
 * @param {number} opamSupervisorId
 * @returns {Promise<Object|null>}
 */
export const getOpamSupervisorById = async (opamSupervisorId) => {
  try {
    const [rows] = await pool.query(`CALL sp_GetOpamSupervisorById(?)`, [
      opamSupervisorId,
    ]);

    return rows[0]?.[0] || null;
  } catch (error) {
    throw new Error(`Error fetching OPAM supervisor: ${error.message}`);
  }
};

/**
 * Update OPAM supervisor record
 * @param {number} opamSupervisorId
 * @param {Object} supervisorData
 * @returns {Promise<boolean>}
 */
export const updateOpamSupervisor = async (
  opamSupervisorId,
  supervisorData
) => {
  const {
    lastname,
    firstname,
    middlename,
    prc_no,
    validity,
    ptr_no,
    issued_date,
    issued_at,
    tin_no,
    ctc_no,
  } = supervisorData;

  try {
    await pool.query(
      `CALL sp_UpdateOpamSupervisor(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        opamSupervisorId,
        lastname,
        firstname,
        middlename,
        prc_no,
        validity,
        ptr_no,
        issued_date,
        issued_at,
        tin_no,
        ctc_no,
      ]
    );

    return true;
  } catch (error) {
    throw new Error(`Error updating OPAM supervisor: ${error.message}`);
  }
};

/**
 * Get all OPAM supervisors
 * @returns {Promise<Array>}
 */
export const getAllOpamSupervisors = async () => {
  try {
    const [rows] = await pool.query(`CALL sp_GetAllOpamSupervisors()`);

    return rows[0] || [];
  } catch (error) {
    throw new Error(`Error fetching all OPAM supervisors: ${error.message}`);
  }
};

/**
 * Search OPAM supervisors by PRC number
 * @param {string} prcNo
 * @returns {Promise<Array>}
 */
export const searchOpamSupervisorByPrcNo = async (prcNo) => {
  try {
    const [rows] = await pool.query(`CALL sp_SearchOpamSupervisorByPrcNo(?)`, [
      prcNo,
    ]);

    return rows[0] || [];
  } catch (error) {
    throw new Error(
      `Error searching OPAM supervisor by PRC number: ${error.message}`
    );
  }
};
