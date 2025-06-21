const Notes = require("./../Models/notesModel");

exports.createNotes = async (req, res) => {
  try {
    const newNotes = await Notes.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        id: newNotes._id,
        notes: newNotes,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getNotes = async (req, res) => {
  try {
    const note = await Notes.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        note,
      },
    });
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({
        status: "fail",
        message: "Invalid Note ID",
      });
    }
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.deleteNotes = async (req, res) => {
  try {
    const notes = await Notes.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
      message: `The Note ${req.params.id} removed successfully`,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.editNotes = async (req, res) => {
  try {
    const newNotes = await Notes.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        data: newNotes,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
