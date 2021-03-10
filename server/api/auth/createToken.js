const jwt = require('jsonwebtoken')

const secret = 'test'

function createToken(user){
    const payload = {
        subject:user.id,
        username:user.username
    }
    const options = {
        expiresIn: '36000s'
    }
    return jwt.sign(payload, secret, options)
}
module.exports = createToken