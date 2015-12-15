package com.twcrone.groovynotes

import grails.converters.*

class NoteRestController {

    def index() {
        render Note.list().collect() { note ->
            [id: note.id, message : note.message, created: note.created, sent: note.sent]
        } as JSON
    }

    def save() {
        def message = request.JSON?.message
        def note = new Note(message: message).save(failOnError: true)
        render note as JSON
    }
}
