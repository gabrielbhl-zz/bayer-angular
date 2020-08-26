module.exports = () => {
    let repository = {};

    let farmersData = require('../data/farmers.json');

    repository.searchByNameOrDocumentNumber = (filter) => farmersData.filter(f => {
        let name = f.name ? f.name : '';
        let documentNumber = f.document.documentNumber ? f.document.documentNumber : '';

        return name.includes(filter) || documentNumber.includes(filter);
    });

    return repository;
}