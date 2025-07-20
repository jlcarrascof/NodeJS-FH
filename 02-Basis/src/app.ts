import { buildLogger } from './plugins/logger.plugin';

// const { getUUID, getAge } = require('./plugins');

const logger = buildLogger('app.js');

logger.log('Application started');
logger.error('An error occurred');
