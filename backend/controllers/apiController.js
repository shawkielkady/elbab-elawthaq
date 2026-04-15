import { fetchAndSaveUsers } from "../services/apiService.js";

export const getExternalData = async (req, res) => {
  try {
    const data = await fetchAndSaveUsers();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};