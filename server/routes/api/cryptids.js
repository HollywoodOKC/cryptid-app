const express = require('express');
const router = express.Router();
const { toggleCryptidStatus } = require("../controllers/cryptidController");

// Load Book model
const Cryptid = require('../../models/Cryptid');

// @route GET apis/cryptids/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('cryptid route testing!'));

// @route GET apis/cryptids
// @description Get all Cryptids
// @access Public
router.get('/', (req, res) => {
    Cryptid.find()
        .then(cryptids => res.json(cryptids))
        .catch(err => res.status(404).json({ nocryptidfound: 'No Cryptids found' }));
});

// @route GET apis/cryptids/:id
// @description Get single cryptid by id
// @access Public
router.get('/:id', (req, res) => {
    Cryptid.findById(req.params.id)
        .then(cryptids => res.json(cryptids))
        .catch(err => res.status(404).json({ nocryptidfound: 'No Cryptids found' }));
});

// @route GET apis/cryptids
// @description add/save cryptid
// @access Public
router.post('/', (req, res) => {
    Cryptid.create(req.body)
        .then(cryptids => res.json({ msg: 'Cryptid added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this Cryptid' }));
});

// @route GET apis/cryptids/:id
// @description Update Cryptid
// @access Public
router.put('/:id', (req, res) => {
    Cryptid.findByIdAndUpdate(req.params.id, req.body)
        .then(cryptids => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route GET apis/cryptids/:id
// @description Delete cryptid by id
// @access Public
router.delete('/:id', (req, res) => {
    Cryptid.findByIdAndDelete(req.params.id, req.body)
        .then(cryptids => res.json({ mgs: 'Cryptid entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such Cryptid!' }));
});

router.get("/cryptids/cryptidOfMonth/:id", toggleCryptidStatus);

module.exports = router;