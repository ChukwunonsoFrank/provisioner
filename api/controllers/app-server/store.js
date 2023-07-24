module.exports = {


  friendlyName: 'Create App Server',


  description: 'Create a fresh Node.js app server.',


  inputs: {
    name: { type: 'string', required: true },
    region: { type: 'string', required: true },
    provider: { type: 'string', required: true },
    nodeVersion: { type: 'string', required: true },
    osIdentifier: { type: 'string', required: true },
    resourceType: { type: 'string', required: true },
    sizeIdentifier: { type: 'string', required: true },
  },


  exits: {

  },


  fn: async function ({ name, region, provider, nodeVersion, osIdentifier, resourceType, sizeIdentifier }, exits) {

    try {

      const uniqueDirIdentifier = await sails.helpers.strings.uuid()
      await sails.helpers.generateTerraformConfig(
        uniqueDirIdentifier,
        provider,
        region,
        name,
        resourceType,
        sizeIdentifier
      )

      await sails.helpers.runTerraformWorkflow(uniqueDirIdentifier)

      await AppServerResource.create({
        name,
        region,
        provider,
        node_version: nodeVersion,
        os_identifier: osIdentifier,
        resource_type: resourceType,
        size_identifier: sizeIdentifier
      })
    } catch (error) {
      sails.log(error)
    }

    return exits.success('App Server created successfully...');

  }


};
