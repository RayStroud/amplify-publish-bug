const { execSync } = require('child_process')

const outputToConsole = (command) => execSync(command, { stdio: 'inherit' })

const goodDeploy = async () => {
  try {
    console.log(`🔔🔔🔔  start`)

    console.log(`🔔🔔🔔  before build`)
    outputToConsole('yarn build')
    console.log(`🔔🔔🔔  after build`)

    // These commands never run
    outputToConsole('echo second command')
    outputToConsole('echo third command')

    console.log(`🔔🔔🔔  finish`)
  } catch (error) {
    console.log('❌❌❌', error)
  }
}

goodDeploy()
