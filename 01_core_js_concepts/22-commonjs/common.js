const getName = (name) => name;
module.exports.getName = getName;

const getSurname = (surname) => surname;
module.exports.getSurname = getSurname;

const getFullName = (name, surname) => `${getName(name)} ${getSurname(surname)}`;
module.exports.getFullName = getFullName;
