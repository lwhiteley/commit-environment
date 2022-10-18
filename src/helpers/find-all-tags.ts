export const findAllTags = (str: string): string[] => {
  if (!str) {
    return [];
  }
  const regex =
    /(--ci)(?=\S*[-])([a-zA-Z0-9-]+)(=)?((\w+)|(('|")(\w+)('|")))?/g;

  const result: string[] = [];
  let m;

  while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    result.push(m[0]);
  }
  return result;
};
