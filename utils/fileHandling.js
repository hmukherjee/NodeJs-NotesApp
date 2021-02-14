const { exception } = require('console')
const fs = require('fs')

const readNotes = () => {
    const rawData = fs.readFileSync('./utils/notes.json', { encoding: 'utf8' })
    const data = JSON.stringify(rawData)
    return JSON.parse(data) || []
}

const readNote = (title) => {
    if (title === '')
        throw exception('title cannot be empty')

    const filteredNotes = JSON.parse(readNotes()).filter((data) => data.title === title)
    if (filteredNotes == undefined || filteredNotes.length === 0)
        return 'No note found'

    return filteredNotes[0]
}

const addNote = (title, author) => {
    if (title === '')
        throw exception('title cannot be empty')
    
    if (author === '')
        throw exception('author cannot be empty')

    const notes = JSON.parse(readNotes())    
    notes.push(
    {
        title,
        author
    })

    fs.writeFileSync('./utils/notes.json', JSON.stringify(notes))
}

const removeNote = (title) => {
    if (title === '')
        throw exception('title cannot be empty')
    
    const notes = JSON.parse(readNotes()).filter((data) => data.title !== title)  
    
    fs.writeFileSync('./utils/notes.json', JSON.stringify(notes))
}

module.exports = {readNotes, readNote, addNote, removeNote}