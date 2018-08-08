import MovieController from './MovieController'

function register(app) {
    const controllers = [
        new MovieController()        
    ]

    controllers.forEach((controller) => {
        if (controller.http) {
            controller.http.forEach((action) => {
                app[action.method](action.url, controller[action.ref].bind(controller))
            })
        }
    })
}

export default { register }