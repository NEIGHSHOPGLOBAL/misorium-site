/**
 * API Routes — wires HTTP verbs to Controllers (like Laravel routes/api.php).
 * Validation rules live in app/http/requests/, not here.
 */

import { Router } from 'express';
import userController from '../app/controllers/UserController.js';
import { validateRequest } from '../app/middlewares/validateRequest.js';
import { userStoreRules, userUpdateRules } from '../app/http/requests/index.js';

const router = Router();

router.get('/users', userController.index.bind(userController));
router.get('/users/:id', userController.show.bind(userController));
router.post(
  '/users',
  validateRequest(userStoreRules),
  userController.store.bind(userController)
);
router.put(
  '/users/:id',
  validateRequest(userUpdateRules),
  userController.update.bind(userController)
);
router.delete('/users/:id', userController.destroy.bind(userController));

export default router;
