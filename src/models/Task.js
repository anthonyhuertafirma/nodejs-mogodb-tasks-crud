import { Schema, model } from "mongoose";

const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    description: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);


module.exports = mongoose.model('Task', taskSchema);
