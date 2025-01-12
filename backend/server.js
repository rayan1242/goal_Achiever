const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {currentHurdleControllerSolution,currentHurdleController, currentHurdleControllerDone} = require('./controller/currentHurdleController');
const {createReward} = require('./controller/rewardController');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const port = 3000;

const genAI = new GoogleGenerativeAI("");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes
app.use('/api/hurdle', currentHurdleController);
app.use('/api/reward', createReward);
app.post('/getPlan', async (req, res) => {
    const { goal, hurdle } = req.body;
    const prompt = `Given the goal "${goal}", provide a consise one step plan to overcome the following hurdle: ${hurdle}`;
    try {
        const result = await model.generateContent(prompt);
        if(result){
            currentHurdleControllerSolution(result.response.text());
        }
        res.json({ plan: result.response.text() });
    } catch (error) {
        console.error('Error fetching plan:', error);
        res.status(500).json({ error: 'Failed to fetch plan', details: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});