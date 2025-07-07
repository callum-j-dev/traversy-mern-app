const asyncHandler = require('express-async-handler');

// @desc    Get goals
// @route   GET /apis/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message:'Get goals' });
})

// @desc    Set goal
// @route   POST /apis/goals
// @access Private

const setGoal = asyncHandler(async (req, res) => {
    console.log('Request body:', req.body);
    // Check if req.body exists and has the text property
    if (!req.body || !req.body.text) {
        console.log('Sending 400 response');
        res.status(400);
        throw new Error('Please add a text field');
    } else {
        console.log('Sending 200 response');
        res.status(200).json({ message: 'Set goal' });
    }
})
// @desc    Update goal
// @route   PUT /apis/goals/:id
// @access  Private

const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message:`Update goal ${req.params.id}` });
})

// @desc    Get goals
// @route   GET /apis/goals
// @access Private

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Delete goal ${req.params.id}`});
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}