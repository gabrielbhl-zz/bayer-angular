module.exports = () => {
    let controller = {};

    var farmerRepository = require('../repository/farmer')();

    controller.search = (req, res) => {
        let filter = req.query.filter;

        let farmers = farmerRepository.searchByNameOrDocumentNumber(filter);

        return farmers.length > 0 ? res.status(200).json(farmers) : res.status(204).json();
    }

    return controller;
};