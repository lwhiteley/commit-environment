import {tagsToObject} from '../tagsToObject'

describe('main', () => {
  it('should map all tags to environment object', () => {


    const result = tagsToObject([
      '--ci-skip',
      '--ci-platform=test',
      '--ci-platform-type',
      '--ci-demo-type=blocking',
      '--ci-demo-type1=blocking45_754',
      '--ci-demo-type2=\'blocking45_754\'',
      '--ci-demo-type3="blocking45_754"'
    ])
    expect(result).toEqual({
      CI_SKIP: 'true',
      CI_PLATFORM: 'test',
      CI_PLATFORM_TYPE: 'true',
      CI_DEMO_TYPE:'blocking',
      CI_DEMO_TYPE_1:'blocking45_754',
      CI_DEMO_TYPE_2: 'blocking45_754',
      CI_DEMO_TYPE_3: 'blocking45_754',
    })
  })
})
