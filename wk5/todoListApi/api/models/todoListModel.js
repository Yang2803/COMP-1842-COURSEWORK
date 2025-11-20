//GCS230038 Nguyen Ngoc Quynh Giang


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    Create_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type:[{
            type: String,
            enum: ['pending', 'in progress', 'completed'],
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);
        
    