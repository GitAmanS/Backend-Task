let tasks = [];
let nextId = 1;

const getAllTasks = (page, limit) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    return tasks.slice(startIndex, endIndex);
};

const getTaskById = (id) => tasks.find(task => task.id === id);

const createTask = (title, description) => {
    const newTask = { id: nextId++, title, description };
    tasks.push(newTask);
    return newTask;
};

const updateTask = (id, title, description) => {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.title = title;
        task.description = description;
    }
    return task;
};

const deleteTask = (id) => {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        return true;
    }
    return false;
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};
