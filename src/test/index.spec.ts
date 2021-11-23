/* eslint-disable @typescript-eslint/no-explicit-any */
import { joinRegExp } from '../'

describe('joinRegExps', () => {
  it('works with 0', () => {
    const regExps: RegExp[] = []
    expect(joinRegExp(regExps).toString()).toEqual('/(?:)/')
  })

  it('works with 1', () => {
    const regExps: RegExp[] = [/[a-z]/]
    expect(joinRegExp(regExps).toString()).toEqual('/[a-z]/')
  })

  it('works with 2', () => {
    const regExps: RegExp[] = [/[a-z]/, /[0-9]/]
    expect(joinRegExp(regExps).toString()).toEqual('/[a-z]|[0-9]/')
  })

  it('works with many', () => {
    const regExps: RegExp[] = [/[a-z]/, /[0-9]/, /\s/]
    expect(joinRegExp(regExps).toString()).toEqual('/[a-z]|[0-9]|\\s/')
  })

  it('works with arrays of regexps', () => {
    const regExps: (RegExp | RegExp[])[] = [[/[a-z]/], [/[0-9]/, /\s/]]
    expect(joinRegExp(regExps).toString()).toEqual('/[a-z]|[0-9]|\\s/')
  })

  it('strips their flags', () => {
    const regExps: RegExp[] = [/[a-z]/g, /[0-9]/i]
    expect(joinRegExp(regExps).toString()).toEqual('/[a-z]|[0-9]/')
  })

  it('accepts flags as second parameter', () => {
    const regExps: RegExp[] = [/[a-z]/g, /[0-9]/i]
    expect(joinRegExp(regExps, 'gi').toString()).toEqual('/[a-z]|[0-9]/gi')
  })
})
