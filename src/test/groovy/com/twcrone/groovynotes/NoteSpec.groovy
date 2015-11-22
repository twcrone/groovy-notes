package com.twcrone.groovynotes

import grails.test.mixin.TestFor
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.domain.DomainClassUnitTestMixin} for usage instructions
 */
@TestFor(Note)
class NoteSpec extends Specification {

    def setup() {
    }

    def cleanup() {
    }

    void "notes are created with today's date"() {
        expect:
        new Note().created
    }
}
