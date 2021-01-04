import snakeCase from 'lodash/snakeCase';
import flow from 'lodash/flow';
import escapeRegExp from 'lodash/escapeRegExp';

const replaceAll = (str: string, find: string, replacement: string): string => {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replacement);
};

const formatValue = flow(
  value => replaceAll(value, '"', ''),
  value => replaceAll(value, "'", ''),
);

export const tagsToObject = (tags: string[]): Record<string, string> => {
  if (!Array.isArray(tags)) {
    return {};
  }

  const tagMap = tags.reduce((accu, tag) => {
    const [key, value] = tag.replace('--ci', 'ci').split('=');
    const formattedValue = value ? formatValue(value) : 'true';
    const formattedKey = snakeCase(key).toUpperCase();
    return {
      ...accu,
      [formattedKey]: formattedValue,
    };
  }, {});

  return tagMap;
};
