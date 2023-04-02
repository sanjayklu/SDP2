import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
//import React, { useState } from "react";
const steps = [
	{
		id: '0',
		message: 'Hey Amigos!',

		// This calls the next id
		// i.e. id 1 in this case
		trigger: '1',
	}, {
		id: '1',
		message: 'Welcome to our site!',

		// This calls the next id
		// i.e. id 1 in this case
		trigger: '2',
		
	}, 
    {
		id: '2',
		message: 'Your good name please!',

		// This calls the next id
		// i.e. id 1 in this case
		trigger: '3',
		
	},{
		id: '3',

		// Here we want the user
		// to enter input
		user: true,
		trigger: '4',
	}, {
		id: '4',
		message: " hi {previousValue}, how can I help you?",
		trigger: '5',
	}, {
		id: '5',
		options: [
			
			// When we need to show a number of
			// options to choose we create alist
			// like this
			{ value: 1, label: 'About' },
			{ value: 2, label: 'contact Support' },
       
		],
		end: true
	}
];

// Creating our own theme
const theme = {
	background: 'white',
	headerBgColor: 'orangered',
	headerFontSize: '30px',
	botBubbleColor: 'skyblue',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: 'skyblue',
	userFontColor: 'yellow',
};

// Set some properties of the bot
const config = {
	botAvatar: "chat.jpg",
	floating: true,
};

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<ChatBot

					// This appears as the header
					// text for the chat bot
					headerTitle="Chatbot"
					 steps={steps} 
					 {...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default App;