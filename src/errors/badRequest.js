const {StatusCodes} = require('http-status-codes')

class badRequest extends Error{
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}
return badRequest