import { Schema, models, model } from 'mongoose'

const schema = new Schema({
  email: {
    type: String,
    required: [true, 'The email is required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'The password is required']
  },
  name: {
    type: String,
    required: [true, 'The name is required']
  },
  lastname: {
    type: String,
    required: [true, 'The lastname is required']
  },
  gender: {
    type: String,
    required: [true, 'The gender is required'],
    enum: ['Male', 'Female']
  },
  region: {
    type: String,
    require: [true, 'The region is required']
  },
  city: {
    type: String,
    require: [true, 'The city is required']
  },
  avatarUrl: String,
  captured: Number
})

schema.methods.toJSON = function() {
  const schema = this.toObject()
  delete schema.__v
  delete schema.password
  return schema
}

export default models?.Trainers || model('Trainers', schema)
