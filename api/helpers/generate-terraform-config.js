const { TerraformGenerator, map } = require('terraform-generator')
const path = require('path')

module.exports = {


  friendlyName: 'Generate terraform config',


  description: 'Generate vendor-specific terraform configurations',


  inputs: {
    configDirectory: {
      type: 'string',
      required: true
    },
    requiredProvider: {
      type: 'string',
      required: true
    },
    providerRegion: {
      type: 'string',
      required: true
    },
    resourceName: {
      type: 'string',
      required: true
    },
    resourceType: {
      type: 'string',
      required: true
    },
    resourceSize: {
      type: 'string',
      required: true
    },
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function ({ configDirectory, requiredProvider, providerRegion, resourceName, resourceType, resourceSize }, exits) {
    let tfg = {}
    let resourceID = ''

    try {
      switch(requiredProvider) {
        case 'aws':
          tfg = new TerraformGenerator({
            required_version: '>= 1.2.0',
            required_providers: {
              aws: map({
                source: 'hashicorp/aws',
                version: "~> 4.16"
              })
            }
          })
          break
      }

      switch(resourceType) {
        case 'app':
          resourceID = 'aws_instance'
          break
      }

      tfg.provider(`${requiredProvider}`, {
        profile: 'default',
        region: providerRegion
      })

      // tfg.data('aws_ami', resourceName, {
      //   most_recent: true,
      //   owners: ['099720109177'],
      //   filter: [
      //     {
      //       name: 'name',
      //       values: ['ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*']
      //     },
      //     {
      //       name: 'virtualization-type',
      //       values: ['hvm']
      //     },
      //     {
      //       name: 'architecture',
      //       values: ['x86_64']
      //     }
      //   ]
      // })
  
      tfg.resource(resourceID, resourceName, {
        ami: 'ami-830c94e3',
        instance_type: resourceSize,
        root_block_device: {
          volume_size: 8
        }
      })
  
      // Write the configuration into a terraform.tf file
      const outputDir = path.join('terraform', 'configs', configDirectory);
      tfg.write({ dir: outputDir, format: true });
      return exits.success('Configuration generated successfully...')

    } catch (error) {
      console.log(error)
    }
  }


};

