let tasks = [];

module.exports = async function (context, req) {
  context.res = {
    body: tasks
  };
};

module.exports.tasks = tasks;
