import {expect} from 'chai'
import { JSDOM } from 'jsdom'

import fs from 'fs'


describe('Our test', () => {
  it('should pass', () => {
    expect(true).to.equal(true)
  })
})

describe('index.html', () => {
  it('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8')
    var dom = new JSDOM(index)
    const h1 = dom.window.document.getElementsByTagName('h1')[0]
    expect(h1.innerHTML).to.equal('Hello World')
    done()
    dom.window.close()
  })
})
