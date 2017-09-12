 	import _ from 'lodash';
	import './style.css';
	import Icon from './icon.png';
	import Data from './data.xml';
	import Data1 from './data.json';
	import printMe from './print.js';


  function component() {
    var element = document.createElement('div');
		var btn = document.createElement('button');
  	// Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
		element.classList.add('hello');

		// 将图像添加到我们现有的 div。
  	var myIcon = new Image();
 		myIcon.src = Icon;

 		element.appendChild(myIcon);

   	btn.innerHTML = 'Click me and check the console!';
   	btn.onclick = printMe;

   	element.appendChild(btn);

		console.log(Data)
		console.log(Data1)
    return element;
  }

  document.body.appendChild(component());
