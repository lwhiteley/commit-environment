import {findAllTags} from '../findAllTags'

describe('main', () => {
  it('should find all tags and return array', () => {
    const testStr = `
    --ci-skip       kugikljl
    --ci-platform=test jhguihik
    --ci-platform-type
    --ci-demo-type=blocking
    --ci-demo-type1=blocking45_754  
    --ci-demo-type2='blocking45_754' 
    --ci-demo-type3="blocking45_754"  
    `

    const result = findAllTags(testStr)
    expect(result).toEqual([
      '--ci-skip',
      '--ci-platform=test',
      '--ci-platform-type',
      '--ci-demo-type=blocking',
      '--ci-demo-type1=blocking45_754',
      '--ci-demo-type2=\'blocking45_754\'',
      '--ci-demo-type3="blocking45_754"'
    ])
  })
})
