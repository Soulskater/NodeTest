var express = require('express');
var cradle = require('cradle');
var dbConnector = require('../connectors/database');
var uuid = require('uuid');
const cors = require('cors');

exports.index = function (req, res, next) {
    var connection = dbConnector.getConnection();
    var db = connection.database('projects');

    db.view('projects/all', function (err, result) {
        if (err) {
            res.json({error: err});
        } else {
            res.json(result.toArray());
        }
    });
};
