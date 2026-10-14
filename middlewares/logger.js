
const logger = (req, res, next) => {
    const ahora = new Date().toLocaleTimeString();
    console.log(`[${ahora}] ${req.method} ${req.originalUrl}`);
    next();
};

module.exports = logger;