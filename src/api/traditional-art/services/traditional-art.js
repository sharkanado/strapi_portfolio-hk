'use strict';

/**
 * traditional-art service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::traditional-art.traditional-art');
