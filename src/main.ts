import * as core from '@actions/core';
import isEmpty from 'lodash/isEmpty';

import { getEnvObject } from './helpers/get-env-object';
(async function run(): Promise<void> {
  try {
    const envObject = await getEnvObject();

    if (isEmpty(envObject)) {
      core.info('No environment tags found');
      return undefined;
    }

    core.info(`environment tags found\n${JSON.stringify(envObject, null, 2)}`);

    for (const entry of Object.entries(envObject)) {
      const [key, value] = entry;
      core.exportVariable(key, value);
      core.setOutput(key, value);
    }
  } catch (error) {
    core.setFailed((error as Error).message);
  }
})();
