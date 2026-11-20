import express from 'express';
import{ getPlants, quizPlants, addPlant, updatePlant} from '../controller/plantController.js';

const router = express.Router();

router.get('/', getPlants);
router.post('/qiuz', quizPlants);
router.post('/', addPlant);
router.put('/:id', updatePlant);

export default router;