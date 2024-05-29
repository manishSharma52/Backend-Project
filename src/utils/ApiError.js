class ApiError extends Error {
    construnctor(
        statusCode,
        message = "something wrong",
        error = [],
        statch = ""

    ){
        super(message)
        this.statusCode = statusCode
        this.data = message
        this.success = false
        this.errors=errors




        if(statck){
            this.statck = statck
        }else{
            Error.captureStackTrance(this, this.constructor)
        }
    }
}
export {ApiError}