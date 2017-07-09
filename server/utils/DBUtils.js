import mongoose from 'mongoose';
import '../models/Video';
// import config from '../etc/config.json';

const Video = mongoose.model('Video');

export function setUpConnection(){
    mongoose.connect(`mongodb://root:secret@ds147052.mlab.com:47052/hobbies`);
}

export function listVideos(){
    return Video.find();
}

export function createVideo(data){
    const video = new Video({
        source: data.source
    });

    return video.save();
}

export function deleteVideo(id){
    return Video.findById(id).remove();
}
