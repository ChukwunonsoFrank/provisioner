/**
 * AppServerResource.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: { type: 'string', required: true },
    region: { type: 'string', required: true },
    provider: { type: 'string', required: true },
    node_version: { type: 'string', required: true },
    os_identifier: { type: 'string', required: true },
    resource_type: { type: 'string', required: true },
    size_identifier: { type: 'string', required: true },
  },

};

