import {findAllTags} from '../findAllTags'

describe('main', () => {
  it('should find all tags and return array', () => {
    const testStr = `
    --ci-skip       kugikljl
    --ci-platform=test jhguihik
    --ci-platform-type
    --ci-demo-type=blocking
    `

    const result = findAllTags(testStr)
    expect(result).toEqual([
      '--ci-skip',
      '--ci-platform=test',
      '--ci-platform-type',
      '--ci-demo-type=blocking'
    ])
  })
})
