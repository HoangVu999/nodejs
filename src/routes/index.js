const newRouter = require('./news');
const siteRoute = require('./site');
function route(app) {

    app.use('/news', newRouter);
    app.use('/', siteRoute);

}

module.exports = route;