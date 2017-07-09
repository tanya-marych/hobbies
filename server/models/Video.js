import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    source: {type:String, required: true}
});

const Video = mongoose.model('Video',VideoSchema);
