const message = require('./index')

test('return a valid greeting', () => {
  expect(message('Iram')).toBe('Hola Iram desde el módulo')
})