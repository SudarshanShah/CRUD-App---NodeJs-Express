const express = require('express')
// get the Express Router
const router = express.Router()
// get the model
const Alien = require('../models/alien')

// to get all records
router.get('/', async(req, res) => {
    try{
        const aliens = await Alien.find()
        res.json(aliens)
    }catch(err) {
        res.send('Error ' + err)
    }
})

// to get specific record
router.get('/:id', async(req, res) => {
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    }catch(err) {
        res.send('Error ' + err)
    }
})

// to insert a record
router.post('/', async(req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try {
        const a1 = await alien.save()
        res.json(a1)
    }catch(err) {
        res.send('Error')
    }
})

// to change/update certain record
router.patch('/:id', async(req, res) => {
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

// to delete specific record
router.delete('/:id', async(req, res) => {
    try{
        const alien = await Alien.findById(req.params.id)
        if(alien!=null) {
            alien.delete()
            res.send('Alien deleted!')
        }
        else{
            res.send('Alien with given Id does not Exist!')
        }
    }catch(err) {
        res.send('Error')
    }
})

// export it for use
module.exports = router