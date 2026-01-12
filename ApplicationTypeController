import pool from "../congig/database.js";

/**
 * Save a new application type
 * @param {Object} applicationTypeData
 * @param {string} applicationTypeData.toa_desc
 * @returns {Promise<number>} Newly created toa_id
 */
export const saveApplicationType = async (applicationTypeData) => {
  const { toa_desc } = applicationTypeData;

  try {
    await pool.query(`CALL sp_InsertApplicationType(?, @p_toa_id)`, [toa_desc]);

    const [rows] = await pool.query(`SELECT @p_toa_id AS toa_id`);

    return rows[0].toa_id;
  } catch (error) {
    throw new Error(`Error saving Application Type: ${error.message}`);
  }
};

/**
 * Get application type by ID
 * @param {number} toaId
 * @returns {Promise<Object|null>}
 */
export const getApplicationTypeById = async (toaId) => {
  try {
    const [rows] = await pool.query(`CALL sp_GetApplicationTypeById(?)`, [
      toaId,
    ]);

    return rows[0]?.[0] || null;
  } catch (error) {
    throw new Error(`Error fetching Application Type: ${error.message}`);
  }
};

/**
 * Update application type
 * @param {number} toaId
 * @param {Object} applicationTypeData
 * @returns {Promise<boolean>}
 */
export const updateApplicationType = async (toaId, applicationTypeData) => {
  const { toa_desc } = applicationTypeData;

  try {
    await pool.query(`CALL sp_UpdateApplicationType(?, ?)`, [toaId, toa_desc]);

    return true;
  } catch (error) {
    throw new Error(`Error updating Application Type: ${error.message}`);
  }
};

/**
 * Get all application types
 * @returns {Promise<Array>}
 */
export const getAllApplicationTypes = async () => {
  try {
    const [rows] = await pool.query(`CALL sp_GetAllApplicationTypes()`);

    return rows[0] || [];
  } catch (error) {
    throw new Error(`Error fetching Application Types: ${error.message}`);
  }
};
