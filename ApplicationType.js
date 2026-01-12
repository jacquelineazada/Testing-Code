import pool from "../congig/database.js";

class ApplicationType {
  constructor(toa_id) {
    this.toa_id = toa_id;
    this.toa_desc = null;
  }

  // Getters
  getToaId() {
    return this.toa_id;
  }

  getToaDesc() {
    return this.toa_desc;
  }

  // Setters
  setToaId(toa_id) {
    this.toa_id = toa_id;
  }

  setToaDesc(toa_desc) {
    this.toa_desc = toa_desc;
  }
}

export default ApplicationType;
