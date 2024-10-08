import {
  login,
  verifyLogin,
  signup,
  verifyOtp,
  resendOtp,
  getProfile,
  updateProfile,
  deleteProfile,
} from "./user";

import { getNotifications, markRead } from "./notifications";

import {
  searchCV,
  searchCvHistory,
  deleteSearchHistory,
  getShortlistedCVs,
  shortlistCV,
  unShortlistCV,
} from "./cv";

export {
  login,
  verifyLogin,
  signup,
  verifyOtp,
  resendOtp,
  getProfile,
  updateProfile,
  deleteProfile,
};

export { getNotifications, markRead };

export {
  searchCV,
  searchCvHistory,
  deleteSearchHistory,
  getShortlistedCVs,
  shortlistCV,
  unShortlistCV,
};
