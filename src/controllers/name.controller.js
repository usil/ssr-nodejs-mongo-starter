const nameModel = require('../models/names.model.js');
const mongoose = require('mongoose');

const Name = mongoose.model('Name', nameModel);

const controllers = () => {
  const controllers = {};

  controllers.saveName = async (req, res) => {
    try {
      const name = new Name({ name: req.body.name });
      const newName = await name.save();
      return res.json({ code: 200000, message: 'Completed', result: newName });
    } catch (error) {
      console.log(error);
      res.status(500).json({ code: 500000, message: 'Data Base Error' });
    }
  };

  return controllers;
};

module.exports = controllers;
