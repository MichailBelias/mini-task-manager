const getModule = require('../getTasks/index.js');

module.exports = async function (context, req) {
  const { task } = req.body;
  if (task) {
    getModule.tasks.push(task);
  }

  context.res = { body: { status: 'ok' } };
};
