let bcrypt = require('bcryptjs');
let salt = bcrypt.genSaltSync(10);

function hashPassword(password){

    return bcrypt.hashSync(password, salt)
}

module.exports = {hashPassword}