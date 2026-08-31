import SpotifyTheme from './spotify'

const colors = {
  light: '#ff5a64',
  main: '#d71920',
  dark: '#8f0f14',
}

const replaceColors = (value) => {
  if (Array.isArray(value)) {
    return value.map(replaceColors)
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        replaceColors(item),
      ]),
    )
  }

  if (typeof value === 'string') {
    return value
      .replace(/#62ec83/gi, colors.light)
      .replace(/#1db954/gi, colors.main)
      .replace(/#008827/gi, colors.dark)
  }

  return value
}

const FanTunesTheme = replaceColors(SpotifyTheme)

FanTunesTheme.themeName = 'FanTunes'

FanTunesTheme.palette = {
  ...FanTunesTheme.palette,
  primary: {
    light: colors.light,
    main: colors.main,
    dark: colors.dark,
    contrastText: '#ffffff',
  },
  background: {
    default: '#090909',
    paper: '#121212',
  },
}

export default FanTunesTheme
