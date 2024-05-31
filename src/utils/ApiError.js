class ApiError extends Error {
    construnctor(
        statusCode,
        message = "something wrong",
        errors = [],
        stack = ""

    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors=errors




        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrance(this, this.constructor)
        }
    }
}
export {ApiError}