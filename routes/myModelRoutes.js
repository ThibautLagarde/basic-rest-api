const express = require('express');
const MyModel = require('../models/myModel');

const router = express.Router()

router.post('/', async (req, res) => {
    const myModel = new MyModel({
        firstAttribute : req.body.firstAttribute,
        secondAttribute : req.body.secondAttribute
    });

    await myModel.save()
    res.json(myModel)
    return
});

router.get('/', async (req, res) => {
    const myModel = await MyModel.find();

    await res.json(myModel);
});

router.get('/:id', async (req, res) => {
    const myModel = await MyModel.findById(req.params.id)

    res.json(myModel)
});

router.delete('/:id', async (req, res) => {
    const deleted = await MyModel.findByIdAndDelete(req.params.id)

    res.json(deleted)
});

router.patch('/:id', async (req, res) => {
    const myModel = await MyModel.findOne({ _id : req.params.id })

    if (req.body.firstAttribute) { myModel.firstAttribute = req.body.firstAttribute }
    if (req.body.secondAttribute) { myModel.secondAttribute = req.body.secondAttribute }

    await myModel.save()
    res.json(myModel)

});

module.exports = router;