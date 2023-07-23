module.exports = {


  friendlyName: 'App Server Create Form',


  description: 'Show form for creating app servers.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    
    return sails.inertia.render('servers/app-server');

  }


};
