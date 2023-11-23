const { Schema, model } = require('mongoose')

const TaskSchemer = Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
},{
    toJSON:{
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
})

TaskSchemer.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
})

module.exports = model('Task', TaskSchemer)