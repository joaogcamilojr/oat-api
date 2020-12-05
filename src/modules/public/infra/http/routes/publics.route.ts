import { Router, request, response } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import PublicsController from '../controllers/PublicsController';

const publicsRouter = Router();
const publicsController = new PublicsController();

publicsRouter.post('/items', celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    description: Joi.string().required(),
    image_url: Joi.string().required()
  },
}), publicsController.createItem);

publicsRouter.put('/items', celebrate({
  [Segments.BODY]: {
    id: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    image_url: Joi.string().required()
  },
}), publicsController.updateItem);

publicsRouter.delete('/items', celebrate({
  [Segments.BODY]: {
    id: Joi.string().required(),
  },
}), publicsController.deleteItem);

publicsRouter.get('/items', publicsController.findAllItems)

publicsRouter.post('/contacts', celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().required(),
    message: Joi.string().required()
  },
}), publicsController.createContact);

export default publicsRouter;
