const rewardModel = require('../model/rewardModel');

const createReward = async (req, res) => {
    const {goal} = req.body;
    const goalId = req.body.goalId;
    const hurdleNum = 1;
    const rewardPoints = 0;
    try {
        const newReward = await rewardModel.create({
            goal,
            hurdleNum,
            rewardPoints
        });
        console.log('New reward created:', newReward);
    } catch (error) {
        console.error('Error creating new reward:', error);
    }
}

const updateReward = async (req, res) => {
    hurdleNum += 1;
    rewardPoints += 1;
    try {
        const updatedReward = await rewardModel.findOneAndUpdate({userId, goal, hurdleNum}, {rewardPoints}, {new: true});
        console.log('Updated reward:', updatedReward);
    }
    catch (error) {
        console.error('Error updating reward:', error);
    }
}

module.exports = {
    createReward
};