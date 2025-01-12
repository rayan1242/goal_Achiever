const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
  UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  goalId: (type:String, required:true),
  goal: { type: String, required: true },
  hurdleNum: { type: Number, required: true},
  rewardPoints: { type: Number, default: 0 },
});

const Reward = mongoose.model('Reward', rewardSchema);
module.exports = Reward;
