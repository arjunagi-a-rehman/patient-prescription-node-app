class CustomAPIError extends Error{
  constructor(message,errorCode){
    super(message);
    this.statusCode=this.statusCode;
  }
}

const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode)
}

module.exports = { createCustomError, CustomAPIError }