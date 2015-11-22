package com.twcrone.groovynotes

import grails.converters.*

class NoteRestController {

    def list() { 
        render Note.list().collect() {
            [message: it.message, created: it.created, sent: it.sent]
        } as JSON
    }
}
