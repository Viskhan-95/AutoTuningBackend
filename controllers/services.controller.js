const Services = require("../models/Services.model");

module.exports.servicesController = {
  getServices: async (req, res) => {
    try {
      const services = await Services.find();
      res.json(services);
    } catch (e) {
      res.json({ error: e.message });
    }
  },

  createServices: async (req, res) => {
    try {
      const services = await Services.create({
        img: req.body.img,
        title: req.body.title,
        text: req.body.text,
        class: req.body.class
      });
      res.json(services);
    } catch (e) {
      res.json({ error: e.message });
    }
  },

  updateServices: async (req, res) => {
    try {
      const services = await Services.findByIdAndUpdate(req.params.id, {
        img: req.body.path,
        title: req.body.title,
        text: req.body.text,
        class: req.body.text
      });
      res.json(services);
    } catch (e) {
      res.json({ error: e.message });
    }
  },

  deleteServices: async (req, res) => {
    try {
      const services = await Services.findByIdAndRemove(req.params.id);
      res.json(services);
    } catch (e) {
      res.json({ error: e.message });
    }
  },
  getServicesById: async (req, res) => {
    try {
        const servis = await Services.find({services: req.params.id})
        res.json(servis)
    } catch (error) {
        return res.status(401).json(error.toString())
    }
},
};
