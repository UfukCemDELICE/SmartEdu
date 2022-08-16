const express = require('express');
const courseController = require('../controllers/courseController');
const router = express.Router();
router.route('/').post(courseController.createCourse);

/*
router.route('/about').get(pageController.getAboutPage);
router.route('/courses').get(pageController.getCoursesPage);
router.route('/dashboard').get(pageController.getDashboardPage);
router.route('/contact').get(pageController.getContactPage);
router.route('/login').get(pageController.getLoginPage);
router.route('/register').get(pageController.getRegisterPage);
*/
module.exports = router;
