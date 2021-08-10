import * as core from '@actions/core'
import { fetchJson } from './request';

async function run(): Promise<void> {
  try {
    
    const inputUrl: string = core.getInput('json-urls');

    const split = inputUrl ? inputUrl.split(",") : [];
    core.info(`Split urls - now fetching ${split}`); 


    const responses = await Promise.all(split.map(url => fetchJson(url)));

    responses.forEach(element => {
      core.info(`Got response: ${element}`);
    });


    core.setOutput('parsed-urls', split)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()