const EventEmitter=require('events')

// create class
class myEmitter extends EventEmitter{

}

// init object
const myemiiter=new myEmitter()

// event listner

myemiiter.on('event',()=>console.log('event fired'))

// call event
myemiiter.emit('event')