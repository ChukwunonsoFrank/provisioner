const { exec } = require('child_process');
const path = require('path')

module.exports = {


  friendlyName: 'Apply Terraform config',


  description: "Runs 'terraform plan' and 'terraform apply' for the specified config identifier.",


  inputs: {
    uniqueDirIdentifier: {
      type: 'string',
      required: true
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function ({ uniqueDirIdentifier }) {
    const scriptPath = path.join('bin', 'run_terraform_apply.sh');

    exec(`chmod +x ${scriptPath}`, (err) => {
      if (err) {
        console.error('Error making the shell script executable:', err);
        return;
      }

      exec(`sh ${scriptPath} "${uniqueDirIdentifier}"`, (error, stdout, stderr) => {
        if (error) {
          console.error('Error executing the shell script:', error);
          return;
        }

        console.log('Terraform apply completed successfully.');
        console.log('Script output:', stdout);
      });
    });
  }


};

