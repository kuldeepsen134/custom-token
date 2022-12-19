const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    first_name: String,
    last_name: String,
    email: {
        type: String,
        lowercase: true,
        unique: [true, "email must be unique"],
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid']
    },
    password: {
        type: String,
        required: [true, "Password is requirde"],
        select: false,
    },
    status: {
        type: String,
        enum: {
            values: ['pending', 'active'],
        }
    },
    access_token: {
        type: String,
        // select: false
    },
    phone_number: String,
    company: String,
    designation: String,
    bio: String,
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('users', userSchema)