currenthurdleModel = require('../Model/currenthurdleModel');
const currentHurdleControllerSolution = async (req, res,text) => {
    try {
        await currenthurdleModel.findByIdAndUpdate(req.body.hurdle, {
            text: text,
            }
        )
    } catch (error) {
        console.error('Error creating new hurdle:', error);
    }
};

const currentHurdleController = async (req, res) => {
    const newHurdle = await currenthurdleModel.create({
        text: req.body.text,
        CHurdle: req.body.hurdle,
        inProcess:true
    });
    
};

const currentHurdleControllerDone = async (req, res) => {
    const inProcess = false;
    updateReward();
};

module.exports = {
    currentHurdleController,
    currentHurdleControllerSolution,
    currentHurdleControllerDone
};