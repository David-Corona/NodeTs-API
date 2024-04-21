// const express = require("express");
import express from 'express';

import { registro } from '../../controllers/admin/auth.controller'
// const AdminAuthController = require("../../controllers/admin/auth.controller"); 

// TODO - Check these are the same, no differences
// const UserAuthController = require("../../controllers/user/auth.controller"); 
// const checkRole = require("../../middleware/check-role");
import * as UserAuthController from '../../controllers/user/auth.controller';
import { checkRole } from '../../middleware/check-role';


const router = express.Router();

// router.post("/registro", AdminAuthController.registro);
router.post("/registro", registro);

router.post("/login", checkRole, UserAuthController.login);
router.post("/refresh-token", UserAuthController.refreshToken);
router.post("/logout", checkRole, UserAuthController.logout);
router.post("/forgot-password", checkRole, UserAuthController.forgotPassword);
router.post("/reset-password", checkRole, UserAuthController.resetPassword);


// module.exports = router;
export default router;