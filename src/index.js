 	import _ from 'lodash';
	import './style.css';
	import Icon from './icon.png';
	import Data from './data.xml';
	import Data1 from './data.json';
	// import printMe from './print.js';
  import printMe from "Print"
  import {cub} from './math.js'

  function component() {
    var element = document.createElement('div');
    var element1 = document.createElement('div');
		var btn = document.createElement('button');
  	// Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack','!!!!'], ' ');
    element1.innerHTML = 'math.js 5*5*5' + cub(5)
		element.classList.add('hello');

		// 将图像添加到我们现有的 div。
  	var myIcon = new Image();
 		myIcon.src = Icon;

 		element.appendChild(myIcon);
    element.appendChild(element1);

   	btn.innerHTML = 'Click me and check the console!';
   	btn.onclick = printMe;

   	element.appendChild(btn);

		console.log(Data)
		console.log(Data1)
    return element;
  }
  if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }
  document.body.appendChild(component());
