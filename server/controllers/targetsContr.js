const Target = require('../models/Target');

exports.createTarget = async (req, res, next) => {
  const { name, date } = req.body;
  try {
    const newTarget = new Target({
      name,
      date,
    });
    await newTarget.save()
      .then(() => {
        res.status(201).json({
          message: 'Target created'
        });
      });
  }
  catch (err) {
    return res.status(500).json({
      message: 'An error occured while creating target',
    });
  } finally {
    await mongoose.connection.close();
  }
}

exports.getTarget = async (req, res, next) => {
  const { id } = req.params;

  try {
    const target = await Target.findById(id);
    res.status(200).json({
      message: 'Target fetched successfully',
      target,
    });
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({
        message: 'Target not found',
      });
    }
    return res.status(500).json({
      message: 'An error occured while fetching target',
    });
  }
}

exports.updateTarget = async (req, res, next) => {
  const { id } = req.params;
  const { name, date } = req.body;

  try {
    const updatedTarget = await Target.findByIdAndUpdate({ _id: id }, { name, date }, { new: true });
    if (!updatedTarget) {
      return res.status(404).json({
        message: 'Target not found',
      });
    } 
    res.status(200).json({
      message: 'Target updated successfully',
      updatedTarget,
    });
    
  } catch (err) {
    res.status(500).json({
      message: 'An error occured while updating target',
    });
  }
}


    

exports.deleteTarget = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedTarget = await Target.findByIdAndDelete(id);
    if (!deletedTarget) {
      return res.status(404).json({
        message: 'Target not found',
      });
    }

    res.status(200).json({
      message: 'Target deleted successfully',
    });
  } catch (err) {
    
    return res.status(500).json({
      message: 'An error occured while deleting target',
    });
  }
}

