import {tagsToObject} from '../tagsToObject'

describe('main', () => {
  it('should map all tags to environment object', () => {


    const result = tagsToObject([
      '--ci-skip',
      '--ci-platform=test',
      '--ci-platform-type',
      '--ci-demo-type=blocking'
    ])
    expect(result).toEqual({
      CI_SKIP: 'true',
      CI_PLATFORM: 'test',
      CI_PLATFORM_TYPE: 'true',
      CI_DEMO_TYPE:'blocking'
    })
  })
})
