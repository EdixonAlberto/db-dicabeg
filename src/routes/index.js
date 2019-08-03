const express = require('express');
const { Router } = require('express');
const router = Router();
const path = require('path');

const networks = {
    twitter: 'https://twitter.com/Dicapp1',
    instagram: 'https://www.instagram.com/dicabeg'
};

// Middleware
router.use(express.static(path.join(__dirname, '../public')));
router.use(express.json());
router.all('/', (req, resp, next) => {
    console.log('middleware');
    next();
})

router.get('/', (req, res) => {
    res.render('home', { networks });
});

module.exports = router;
