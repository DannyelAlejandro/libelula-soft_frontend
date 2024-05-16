import HttpService from "./httpService";

class movieService extends HttpService {
    constructor() {
        super('api/movies')
    }
}

export default movieService