const { TerraformGenerator } = require('terraform-generator')
const path = require('path')

module.exports = {


  friendlyName: 'Generate terraform config',


  description: 'Generate vendor-specific terraform configurations',


  inputs: {

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
    try {
      const tfg = new TerraformGenerator({
        required_version: '>= 0.12',
        required_providers: {
          aws: {
            source: 'hashicorp/aws',
            version: "~> 4.16"
          }
        }
      });
  
      tfg.provider('aws', {
        region: 'us-west-2'
      })
  
      tfg.resource('aws_instance', 'app_server', {
        ami: 'ami-08d70e59c07c61a3a',
        instance_type: 't2.micro'
      })
  
      // Write the configuration into a terraform.tf file
      const outputDir = path.join('terraform', 'configs');
      tfg.write({ dir: outputDir, format: true });
      return exits.success('Configuration generated successfully...')

    } catch (error) {
      console.log(error)
    }
  }


};

