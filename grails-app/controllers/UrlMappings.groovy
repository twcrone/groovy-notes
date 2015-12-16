class UrlMappings {

    static mappings = {

        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }
        
        "/api/notes"(resources:'noteRest', includes:['index', 'save'])

        "/"(redirect: "/index.html")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
