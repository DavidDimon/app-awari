import * as Icons from '@assets/icons'

const Icon = Object.keys(Icons).reduce(
  (memo, cur) => ({ ...memo, [cur]: Icons[cur] }),
  {}
)

export default Icon
