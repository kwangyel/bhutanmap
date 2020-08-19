import {Router} from 'express';
import mapController from '../controllers/mapController';
// import cache from '../utils/cache';

const router=Router();

//get boundary of all dzongkhag thromdes

router.get('/throms',mapController.getAlldzoThrom)
router.get('/buildings/:dzo',mapController.getBuilding)
router.get('/zone',mapController.getZone)
router.post('/checkzone',mapController.checkPointInZone)


export default router;
