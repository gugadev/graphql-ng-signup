import * as pino from 'pino'

const loggerOptions: pino.LoggerOptions = {
  prettyPrint: true,
  base: null
}

export default pino(loggerOptions)
