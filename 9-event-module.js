const EventEmitter = require('events')
const event = new EventEmitter();
event.on('click', () => {
    console.log('Click event Occured...')
})

event.emit('click')