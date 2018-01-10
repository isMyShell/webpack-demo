import _ from 'lodash'
import './index.css'
import './demo.css'
import './less.less'
import Icon from './icon.png'
import {square} from './math.js'
import './process.env.NODE_ENV.js'
const newImg = (imgSrc , w = 100, h = 100) => {
  const img = new Image()
  img.src = imgSrc
  img.width =  w
  img.height = h
  return img
}
const creactEle = () => {
  const div = document.createElement('div')
  div.innerHTML = _.join(['Hello', 'webpack', square(8)] ,' ')

  let img = newImg(Icon)
  div.appendChild(img)
  return div
}

document.body.appendChild(creactEle())