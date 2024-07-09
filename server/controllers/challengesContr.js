const Challenge = require('../models/Challenge');

exports.createChallenge = async (req, res, next) => {
  const { name, task, taskCountTarget, active } = req.body;
  try {
    const newChallenge = new Challenge({
      name,
      task,
      taskCountTarget,
      active,
    });
    await newChallenge.save()
      .then(() => {
        res.status(201).json({
          message: 'Challenge created'
        });
      });
  }
  catch (err) {
    return res.status(500).json({
      message: 'An error occured while creating challenge',
    });
  } finally {
    await mongoose.connection.close();
  }
}

exports.getChallenge = async (req, res, next) => {
  const { id } = req.params;

  try {
    const challenge = await Challenge.findById(id);
    res.status(200).json({
      message: 'Challenge fetched successfully',
      challenge,
    });
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({
        message: 'Challenge not found',
      });
    }
    return res.status(500).json({
      message: 'An error occured while fetching challenge',
    });
  }
}

exports.updateChallenge = async (req, res, next) => {
  const { id } = req.params;
  const { name, task, taskCountTarget, active } = req.body;

  try {
    const updatedChallenge = await Challenge.findByIdAndUpdate({ _id: id }, { name, date }, { new: true });
    if (!updatedChallenge) {
      return res.status(404).json({
        message: 'Challenge not found',
      });
    } 
    res.status(200).json({
      message: 'Challenge updated successfully',
      updatedChallenge,
    });
    
  } catch (err) {
    res.status(500).json({
      message: 'An error occured while updating challenge',
    });
  }
}


    

exports.deleteChallenge = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedChallenge = await Challenge.findByIdAndDelete(id);
    if (!deletedChallenge) {
      return res.status(404).json({
        message: 'Challenge not found',
      });
    }

    res.status(200).json({
      message: 'Challenge deleted successfully',
    });
  } catch (err) {
    
    return res.status(500).json({
      message: 'An error occured while deleting challenge',
    });
  }
}

