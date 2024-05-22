const taskModel = require('../models/taskModel');

const getAllTasks = (req, res) => {
    const { page, limit } = req.body;
    console.log(page, 'and', limit)
    const pageNumber = parseInt(page, 10) || 1;
    const limitNumber = parseInt(limit, 10) || 10;
    
    const tasks = taskModel.getAllTasks(pageNumber, limitNumber);
    res.status(200).json(tasks);
};



const getTaskById = (req, res) => {
    const taskId = parseInt(req.params.id, 10);
    const task = taskModel.getTaskById(taskId);
    if (task) {
        res.status(200).json(task);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
};

const createTask = (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    const newTask = taskModel.createTask(title, description);
    res.status(201).json(newTask);
};

const updateTask = (req, res) => {
    const taskId = parseInt(req.params.id, 10);
    const { title, description } = req.body;
    const task = taskModel.updateTask(taskId, title, description);
    if (task) {
        res.status(200).json(task);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
};

const deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id, 10);
    const success = taskModel.deleteTask(taskId);
    if (success) {
        res.status(204).end();
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};
