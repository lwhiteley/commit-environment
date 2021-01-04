import * as core from '@actions/core';
import isEmpty from 'lodash/isEmpty';

import { getEnvObject } from './helpers/getEnvObject';
(async function run(): Promise<void> {
  try {
    const envObject = await getEnvObject();

    if (isEmpty(envObject)) {
      core.info('No environment tags found');
      return undefined;
    }

    core.info(`environment tags found\n${JSON.stringify(envObject, null, 2)}`);

    Object.entries(envObject).forEach(([key, value]) => {
      core.exportVariable(key, value);
      core.setOutput(key, value);
    });
  } catch (error) {
    core.setFailed(error.message);
  }
})();
