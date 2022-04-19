const mongoose = require('mongoose');

const studentSubSchema = new mongoose.Schema(
  {
    grupid: {
      type: String,
      required: true,
      trim: true
    },
    assignmentid: {
        type: String,
        required: true,
        trim: true
    },
    assignmentname: {
      type: String,
      required: true,
      trim: true
    },
    file_path: {
      type: String,
      required: true
    },
    file_mimetype: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const StudentSub = mongoose.model('student submission', studentSubSchema);

module.exports = StudentSub;