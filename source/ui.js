'use strict';
const path = require('path');
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');


const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}
	if (item.action) {
		item.action();
	}
	if(item.skypeAction){
		console.log(item.skypeAction())
	}
};

const items = [
	{
		label: 'Aboutr Me',
		url: 'https://about.me/usamaliaquat'
	},
	{
		label: 'Github',
		url: 'https://github.com/Usamaliaquat123'
	},
	{
		label: 'LinkedIn',
		url: 'https://www.linkedin.com/in/usamaliaquat'
	},
	{
		label: 'facebook',
		url: 'https://www.facebook.com/usama.ali.0303506'
	},
	{
		label: 'Private Email',
		url: 'mailto:inconnent12345@outlook.com'
	},
	{
		label: 'Skype',
		skypeAction(){
			return 'My skype Id is  ==> live:inconnent12345'
		}
	},
	// TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>Hello, I'm Usama Liaquat</Text>
		</div>
		<br/>
		<div>
			<Text>I'm full stack javaScript developer.</Text>
		</div>
		<br/>
		<div>
			<Text>wanna to learn more about me 💥</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
