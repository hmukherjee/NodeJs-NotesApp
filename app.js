const fh = require('./utils/fileHandling.js')

fh.addNote('CSS', 'Hemant')

console.log(fh.removeNote('CSS'))

console.log(fh.readNotes())

console.log(fh.readNote('C#'))