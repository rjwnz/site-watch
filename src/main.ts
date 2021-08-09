import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    
    const inputUrl: string = core.getInput('json-urls');

    const split = inputUrl ? inputUrl.split(",") : []; 
    core.setOutput('parsed-urls', split)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
