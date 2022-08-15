const pino = require('pino')

const logger = pino()

logger.level = 'info'

logger.debug('Log de debug')
logger.info('Log de info')
logger.warn('Log de warn')
logger.error('Log de error')


logger.info({ name: 'Iram' }, 'Log con data')

const childLogger = logger.child({ module: 'userRepository' })

childLogger.info('Log desde userRepository')