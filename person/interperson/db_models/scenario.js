const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  // Other course-related fields
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
