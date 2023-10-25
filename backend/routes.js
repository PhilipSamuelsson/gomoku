const router = require('express').Router()

router.get('/create_game', (req, res) => {
    res.json({ status: 'success' })
})

router.get('/add_player', (req, res) => {
    res.json({ status: 'success' })
})

router.get('/play', (req, res) => {
    res.json({ status: 'success' })
})

module.exports = router
