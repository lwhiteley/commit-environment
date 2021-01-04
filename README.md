# commit-environment

Github action to parse ci tags from commit messages. This is a generic tag parser to fit into any workflow that may want to take an action only for a specific commit.

**Possible use case:** Enable demo mode for a specific commit and block build as this must not get into master branch

### tag patterns

```
--ci-skip
--ci-platform=test
--ci-platform-type
--ci-demo-type=blocking
```

Tags can have an optional value `<tag>=some_value`

Tags will be exported as step outputs and also as environment variables.

To reference as an output or environment variable, please use the snakecase+uppercased version of the tag

for eg.

`--ci-skip` will be transformed into CI_SKIP

Practical example:

```
// commit messages
This is my sample commit subject

Now my commit body has some tags

--ci-skip
--ci-platform=test
--ci-platform-type
--ci-demo-type=blocking
```

Result:

```js
{
  CI_SKIP: 'true',
  CI_PLATFORM: 'test',
  CI_PLATFORM_TYPE: 'true',
  CI_DEMO_TYPE:'blocking'
}
```

TODO:

- [ ] support quoted values
