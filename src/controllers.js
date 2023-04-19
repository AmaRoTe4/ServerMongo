import { connection, close } from "./mongo.js";
import Model from "./schema.js";

export const getAllData = (req, res, next) => {
  Model.find()
    .then((data) => {
      if (data)
        return res.json(data
        //  data.map((nota) => {
        //    return {
        //      id: nota._id,
        //      name: nota.name,
        //      lastName: nota.lastName,
        //    };
        //  })
        );
      else return res.status(404).end();
    })
    .catch((err) => next(err));
};

export const addData = (req, res , next) => {
  if (!req.body)
    res.status(400).json({
      error: "required a body for addData",
    });

  Model.create({
    name: req.body.name,
    lastName: req.body.lastName,
  })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      next(error);
    });
};

export const getDataById = (req, res, next) => {
  try {
    Model.findById(req.params.id).then((nota) => {
      if (nota)
        return res.json(nota
        //{
        //  id: nota._id,
        //  name: nota.name,
        //  lastName: nota.lastName,
        //}
        );
      else return res.status(404).end();
    });
  } catch (err) {
    next(err);
  }
};

export const updateData = (req, res , next) => {
  if (!req.body)
    res.status(400).json({
      error: "required a body for updateData",
    });

  Model.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name || "",
      lastName: req.body.lastName || "",
    },
    { new: true }
  )
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      next(error);
    });
};

export const deleteDataById = (req, res, next) => {
  if (!req.params.id)
    res.status(400).json({
      error: "required a body for deleteDataById",
    });

  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((err) => next(err));
};