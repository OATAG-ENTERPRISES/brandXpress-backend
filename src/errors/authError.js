const {StatusCodes} = require('http-status-codes')

class authError extends Error{
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}
return {authError}