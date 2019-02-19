const EventEmiiter=require('events');

const uuid =require('uuid');

class Logger extends EventEmiiter{
    log(msg){
        this.emit('message',{id:uuid.v4(),msg})
    }
}

const Logger =require('./logger');

const logger=new Logger()

logger.on('message',data=>console.log('called listener',data))

logger.log('dee')