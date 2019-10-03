import { Router } from 'express';
import eraseEvents from './eraseEvents';
import events from './events';
import actor from './actor';

const router = Router();

router.use('/erase', eraseEvents);
router.use('/events', events);
router.use('/actors', actor);

export default router;
