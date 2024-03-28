const router = require('express').Router();
const { Tutor, Skill } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all tutors and JOIN with skill data
    const tutorData = await Tutor.findAll({
      include: [
        {
          model: Skill,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const tutors = tutorData.map((tutor) => tutor.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      tutors, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
