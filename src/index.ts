/**
 * Utility to join RegExps together.
 *
 * @param regexps Array of regexps to be joined.
 * @param flags The flags to use
 */
export const joinRegExp = (regexps: (RegExp | RegExp[])[], flags = '') =>
  new RegExp(
    regexps
      .flat()
      .map(x => x.toString())
      .map(x => x.slice(x.indexOf('/') + 1, x.lastIndexOf('/')))
      .join('|'),
    flags
  )

export default joinRegExp
