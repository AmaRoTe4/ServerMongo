import { getAllData , addData, getDataById, updateData, deleteDataById } from './controllers.js'
import express from 'express'

const router = express.Router()

router.get('/', getAllData);
router.get('/:id', getDataById);
router.post('/', addData);
router.put('/:id', updateData);
router.delete('/:id', deleteDataById);
router.use((request , response , next) => {
    response.status(404).end();
})
router.use((error , request , response , next) => {
    console.error(error)
    if(error.name === "CastError") response.status(400).send("id not validated")
    else response.status(500).end()
})


export default router;