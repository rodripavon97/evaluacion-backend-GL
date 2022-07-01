const jwt = require('jsonwebtoken')

const generateToken = () => {
  const token = jwt.sign(
    {
      data: 'Aquí van los datos'
    },
    'UnaContraseñaSecreta',
    { expiresIn: '1d' }
  )

  return token
}

module.exports = generateToken