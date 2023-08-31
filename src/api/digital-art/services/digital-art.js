'use strict';

/**
 * digital-art service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::digital-art.digital-art');
