import fs from 'fs';
import { readCommit } from 'isomorphic-git';

import { findAllTags } from './findAllTags';
import { tagsToObject } from './tagsToObject';

const { GITHUB_SHA, GITHUB_WORKSPACE } = process.env;

export const getEnvObject = async (): Promise<Record<string, string>> => {
  const { commit } = await readCommit({
    fs,
    oid: GITHUB_SHA || '',
    dir: GITHUB_WORKSPACE,
  });
  return tagsToObject(findAllTags(commit.message));
};
