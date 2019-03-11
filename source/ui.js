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
};

const items = [
	{
		label: 'Blog',
		url: 'https://medium.com/@JSdevelop'
	},
	{
		label: 'Github',
		url: 'https://github.com/Usamaliaquat123'
	},
	{
		label: 'LinkedIn',
		url: 'https://www.linkedin.com/in/usama-liaquat-02045b121/'
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
		async action(){
			console.log('live:inconnent12345')
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
			<Text>I'm just a javaScript developer</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
