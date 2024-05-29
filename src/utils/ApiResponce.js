class ApiResponce {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data =datathis.message()
        this.message = message
        this.success = statusCode <400
    }
}