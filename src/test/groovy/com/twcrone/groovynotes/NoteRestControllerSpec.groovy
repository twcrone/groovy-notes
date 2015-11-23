package com.twcrone.groovynotes

import grails.test.mixin.TestFor
import grails.test.mixin.Mock
import spock.lang.Specification

@TestFor(NoteRestController)
@Mock([Note])
class NoteRestControllerSpec extends Specification {

    def setup() {
        new Note(message: "I love you!").save(failOnError: true)
    }

    def cleanup() {
    }

    void "list endpoint returns all notes"() {
        when:
        controller.index()

        then:
        response.json.size() == 1
    }
}
