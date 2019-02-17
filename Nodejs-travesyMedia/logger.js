const EventEmiiter=require('events');

const uuid =require('uuid');

class Logger extends EventEmiiter{
    log(msg){
        this.emit('message',{id:uuid.v4(),msg})
    }
}

module.exports=Logger