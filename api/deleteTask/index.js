const getModule = require('../getTasks/index.js');

module.exports = async function (context, req) {
  const { index } = req.body;
  if (typeof index === 'number') {
    getModule.tasks.splice(index, 1);
  }

  context.res = { body: { status: 'deleted' } };
};
