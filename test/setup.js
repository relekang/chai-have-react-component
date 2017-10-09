/* eslint-env node, browser */
import jsdom from 'jsdom'
import chai from 'chai'

import chaiHaveReactComponent from '../src/index'

chai.use(chaiHaveReactComponent)

if (typeof global.document === 'undefined') {
  const dom = new jsdom.JSDOM('<!doctype html><html><body></body></html>')
  global.document = dom.window.document
  global.window = dom.window
}

global.chai = chai
