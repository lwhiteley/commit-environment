import snakeCase from 'lodash/snakeCase';

export const tagsToObject = (tags: string[]): Record<string, string> => {
  if (!Array.isArray(tags)) {
    return {};
  }

  const tagMap = tags.reduce((accu, tag) => {
    const [key, value] = tag.replace('--ci', 'ci').split('=');
    return {
      ...accu,
      [snakeCase(key).toUpperCase()]: value ? value : 'true',
    };
  }, {});

  return tagMap;
};
