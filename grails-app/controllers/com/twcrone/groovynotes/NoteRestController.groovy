package com.twcrone.groovynotes

import grails.converters.*

class NoteRestController {

    def index() {
        println "List..."
        render Note.list().collect() {
            [message: it.message, created: it.created, sent: it.sent]
        } as JSON
    }

    def save() {
        def message = request.JSON?.message
        def note = new Note(message: message).save(failOnError: true)
        render note as JSON
    }
}
