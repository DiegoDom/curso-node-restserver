const { response } = require('express');

const getUsuarios = (req, res = response) => {

    const { page = 1, limit = 50 } = req.query;

    res.json({
        msg: 'API GET METHOD - controller',
        page,
        limit
    });
};

const putUsuarios = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'API PUT METHOD - controller',
        id
    });
};

const postUsuarios = (req, res = response) => {

    const body = req.body;

    res.status(201).json({
        msg: 'API POST METHOD - controller',
        body
    });
};

const deleteUsuarios = (req, res = response) => {
    res.json({
        msg: 'API DELETE METHOD - controller'
    });
}

const patchUsuarios = (req, res = response) => {
    res.status(500).json({
        msg: 'API PATCH METHOD - controller'
    });
}

module.exports = {
    getUsuarios,
    putUsuarios,
    postUsuarios,
    deleteUsuarios,
    patchUsuarios
};