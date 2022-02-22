import { Icon } from '@components'

import { theme } from '@styles/theme'

export const POKE_TYPES = {
  bug: {
    name: 'Bug',
    icon: (props) => <Icon.Bug {...props} />,
    color: theme.bug,
    bgColor: theme.bgBug,
  },
  dark: {
    name: 'Dark',
    icon: (props) => <Icon.Dark {...props} />,
    color: theme.dark,
    bgColor: theme.bgDark,
  },
}
