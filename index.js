const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('called listener:', data));

logger.log('Hello World');

// const Person = require('./person');

// const person1 = new Person('John Doe', 30);

// person1.greeting();