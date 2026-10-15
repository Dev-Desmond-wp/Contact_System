const logger = (req, res, next)=>{
   const date = new Date
    const result = `API with endpoint: ${req.url} and method: ${req.method} was called at ${date.toLocaleString}`

    next()
}

module.exports = logger