import { joinRegExp } from '../src'

const regexp = joinRegExp(
  [
    /(?<ids>[a-z_][a-z0-9_]*)/gm, // <= individual flags are stripped
    /(?<num>\d+(\.\d*)?)/,
    /(?<ops>[-~+*/%=<>?!:|&^@$]{1,2})/,
    /(?<grp>[\[\]\(\)\",.])/,
    /(?<nul>[ \t\n]+)/,
    /(?<err>.)/,
  ],
  'gi' // <= flags added to the entire regexp
)

console.log(regexp)
// => /(?<ids>[a-z_][a-z0-9_]*)|(?<num>\d+(\.\d*)?)|(?<ops>[-~+*/%=<>?!:|&^@$]{1,2})|(?<grp>[\[\]\(\)\",.])|(?<nul>[ \t\n]+)|(?<err>.)/gi
