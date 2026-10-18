import { Router } from 'express';
import * as trips from '../controllers/trips.controller.js';
import * as bookings from '../controllers/bookings.controller.js';
import * as contact from '../controllers/contact.controller.js';
import * as newsletter from '../controllers/newsletter.controller.js';
import { validate } from '../middleware/validate.js';
import { validateBooking } from '../validators/booking.validator.js';
import { validateContact } from '../validators/contact.validator.js';
import { validateNewsletter } from '../validators/newsletter.validator.js';

const router = Router();

router.get('/health', (_req, res) => res.json({ status: 'ok' }));
router.get('/trips', trips.list);
router.get('/trips/:id', trips.get);
router.post('/bookings', validate(validateBooking), bookings.create);
router.post('/contact', validate(validateContact), contact.create);
router.post('/newsletter', validate(validateNewsletter), newsletter.create);

export default router;
