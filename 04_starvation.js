const fs = require('fs');

function addNextTickRecurs(count) {
    let self = this;
    if (self.id === undefined) {
        self.id = 0;
    }

    if (self.id === count) return;

    process.nextTick(() => {
        console.log(`process.nextTick call ${++self.id}`);
        addNextTickRecurs.call(self, count);
    });
}

addNextTickRecurs(Infinity);
setTimeout(console.log.bind(console, 'setTimeout was called'), 10);
setImmediate(console.log.bind(console, 'setImmediate also was called'));
fs.readFile(__filename, () => {
    console.log('file read complete callback was called!');
});

console.log('started');