import com.twcrone.groovynotes.*

class BootStrap {

    def init = { servletContext ->
      new Note(message: "I love you babe!", sent: new Date()).save()
      new Note(message: "You're beautiful!").save()
    }
    def destroy = {
    }
}
