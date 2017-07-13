export function addNote(source){
    return {
        type:'ADD_NOTE',
        payload:{
            "id":Date.now(),
            "text":source.text,
            "color":source.color
        }
    };
}

export function removeNote(id){
    return {
        type:'REMOVE_NOTE',
        payload:id
    };
}
