

export function errorHandler(error: (any | {message: string})){
    console.log(error.message)
}