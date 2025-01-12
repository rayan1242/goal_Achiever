const mongoose = require('mongoose');

const currentHurdleSchema = new mongoose.Schema({
  UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  goalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Goal', required: true },
  CHurdle: { type: String, required: true },
  solution: { type: String, required: true },
  InProcess: { type: Boolean, default: true }, // Indicates if the hurdle is being worked on
});

const CurrentHurdle = mongoose.model('CurrentHurdle', currentHurdleSchema);
module.exports = CurrentHurdle;
