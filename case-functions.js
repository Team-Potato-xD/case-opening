

function createCase(name, description, price, drops) {
    model.cases.push({
        id: 1,
        image: '',
        name: name,
        description: description,
        price: price,
        drops: drops,

    });
}

function findCase(id) {
    const result = model.cases.filter(cases => cases.id === id);
    return result.length > 0 ? result[0] : null;
}

function findCaseIndex(id) {
    return model.cases.findIndex(cases => cases.id === id);
}

/*function editCase(caseId, itemId) {

};

*/