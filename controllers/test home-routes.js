const router = require('express').Router();
const Tutor = require('../models/Tutor');
const Skill = require('../models/Skill');
const withAuth = require('../utils/auth');

// GET all tutors
router.get('/tutors', async (req, res) => {
  try {
    const tutors = await Tutor.findAll({
      include: Skill,
    });

    res.render('tutors', { tutors, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one tutor
router.get('/tutors/:id', withAuth, async (req, res) => {
  try {
    const tutor = await Tutor.findByPk(req.params.id, {
      include: Skill,
    });

    res.render('tutor-profile', { tutor, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all skills
router.get('/skills', async (req, res) => {
  try {
    const skills = await Skill.findAll({
      include: Tutor,
    });

    res.render('skills', { skills, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one skill
router.get('/skills/:id', withAuth, async (req, res) => {
  try {
    const skill = await Skill.findByPk(req.params.id, {
      include: Tutor,
    });

    res.render('skill-details', { skill, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
