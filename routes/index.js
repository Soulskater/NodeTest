const express = require("express");
const cors = require('cors');
const user = require('./user');
const projects = require('./projects');
const blog = require('./blog');


exports.registerRoutes = function (api) {
    var corsHandler = cors({
        origin: 'http://mgprog-web.azurewebsites.net',
        optionsSuccessStatus: 200
    });
    api.post('/user/register', user.register);
    api.post('/user/auth', user.auth);
    api.get('/blog', corsHandler, blog.index);
    api.get('/project', corsHandler, projects.index);
};