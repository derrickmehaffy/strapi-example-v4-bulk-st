'use strict';

/**
 * test controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test.test', ({ strapi }) =>  ({
  async combined(ctx) {
    const test = strapi.controllers['api::test.test']
    const blah = strapi.controllers['api::blah.blah']

    // Note that it might be required to modify the ctx before passing it in,
    // depending on what you are looking to pass in such as population
    return {
      test: await test.find(ctx),
      blah: await blah.find(ctx)
    }
  },
}));
