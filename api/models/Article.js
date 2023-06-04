/**
 * Article.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    content: { type: 'string', required: true },
    secret_key: { type: 'string', required: true }
  },

  // customToJSON: function () {
  //   return _.omit(this, ['secret_key'])
  // }

};

