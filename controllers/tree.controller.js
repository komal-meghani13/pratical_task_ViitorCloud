const { search, insertNode} = require('../services/tree');

async function insert(req, res){
    if(!req.body.data) {
        //TODO:: add JOI  validation in middleware
        return res.status(400).send({
            message: "Data content can not be empty"
        });
    }

    let data = [' ',...req.body.data]; //add ' ' defalut as root node
    let response = await insertNode(rootNode,data,1);

    return res.status(200).send({
        data : 'Data inserted'
    })
}

async function find(req, res){
    if(!req.params.data) {
        //TODO:: add JOI  validation in middleware
        return res.status(400).send({
            message: "Data content can not be empty"
        });
    }

    let data = [' ',...req.params.data];//add ' ' defalut as root node
    let response = await search(rootNode,data,1);

    return res.status(200).send({
        data : response
    })
}

module.exports = {
    insert,
    find
}