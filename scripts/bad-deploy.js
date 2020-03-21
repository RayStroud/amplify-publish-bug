const { execSync } = require('child_process')

const outputToConsole = (command) => execSync(command, { stdio: 'inherit' })

const badDeploy = async () => {
  try {
    console.log(`🔔🔔🔔  start`)

    console.log(`🔔🔔🔔  before publish`)
    outputToConsole('amplify publish -y')
    console.log(`🔔🔔🔔  after publish`)

    // These commands SHOULD never run
    outputToConsole('echo second command')
    outputToConsole('echo third command')

    console.log(`🔔🔔🔔  finish`)
  } catch (error) {
    console.log('❌❌❌', error)
  }
}

badDeploy()
