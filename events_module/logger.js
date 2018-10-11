const EventEmmitter = require('events');

class Logger extends EventEmmitter {
  log(message) {
    console.log(message);

    this.emit('messageLogged', { id: 1, url: 'http://' });
  }
}

module.exports = Logger;
