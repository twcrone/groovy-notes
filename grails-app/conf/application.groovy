environments {
    development {
        dataSource {
            dbCreate = "create-drop"
            driverClassName = "org.postgresql.Driver"
            url = "jdbc:postgresql://localhost/groovy-notes-dev"
            username = "postgres"
            password = "postgres"
        }
    }
    test {
        dataSource {
            dbCreate = "create-drop"
            driverClassName = "org.postgresql.Driver"
            url = "jdbc:postgresql://localhost/groovy-notes-test"
            username = "postgres"
            password = "postgres"
        }
    }
    production {
        dataSource {
            dbCreate = "update"
            driverClassName = "org.postgresql.Driver"
            uri = new URI(System.env.DATABASE_URL?:"postgres://test:test@localhost/test")
            url = "jdbc:postgresql://" + uri.host + ":" + uri.port + uri.path
            username = uri.userInfo.split(":")[0]
            password = uri.userInfo.split(":")[1]
        }
    }
}