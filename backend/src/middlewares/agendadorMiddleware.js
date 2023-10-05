const validadeBody = (req, res, next) => {
    const { body } = req;

    if(body.client == undefined){
        return res.status(400).json({ message: 'The field "client" is required'});
    }

    
    if(body.client == ''){
        return res.status(400).json({ message: 'client cannot be empty'});
    }

    next();
};

module.exports = {
    validadeBody,
};