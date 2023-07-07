const { TerraformGenerator, map } = require('terraform-generator')
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
        required_version: '>= 1.2.0',
        required_providers: {
          aws: map({
            source: 'hashicorp/aws',
            version: "~> 4.16"
          })
        }
      })
  
      tfg.provider('aws', {
        profile: 'default',
        region: 'us-west-2'
      })

      tfg.data('aws_ami', 'app_server', {
        most_recent: true,
        owners: ['099720109177'],
        filter: [
          {
            name: 'name',
            values: ['ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*']
          },
          {
            name: 'virtualization-type',
            values: ['hvm']
          },
          {
            name: 'architecture',
            values: ['x86_64']
          }
        ]
      })
  
      tfg.resource('aws_instance', 'app_server', {
        ami: data.aws_ami.app_server.id,
        instance_type: 't2.small',
        root_block_device: {
          volume_size: 8
        }
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

