const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');

// @desc    Get goals
// @route   GET /apis/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();

    res.status(200).json(goals);
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
        const goal = await Goal.create({
            text: req.body.text,
        })

        console.log('Sending 200 response');
        res.status(200).json(goal);
    }
})
// @desc    Update goal
// @route   PUT /apis/goals/:id
// @access  Private

const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error('Goal not found');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedGoal);
})

// @desc    Get goals
// @route   GET /apis/goals
// @access Private

const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error('Goal not found');
    }

    const deletedGoal = await Goal.findOneAndDelete(req.params.id)

    res.status(200).json({message:`Deleted goal ${req.params.id}`});
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}