import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const elementDom = document.getElementById('root');
const root = ReactDOM.createRoot(elementDom);
// function App() {
// 	let message = 'By there';
// 	if (Math.random() > 0.5) {
// 		message = 'Privet';
// 	}
// 	const date = new Date();
// 	const time = date.toLocaleTimeString();
// 	return (
// 		<div>
// 			<h1>{message}</h1>
// 			<h2>{time}</h2>
// 			<input
// 				style={{ text: 'green', border: '3px solid pink' }}
// 				maxLength={5}
// 				type={'number'}
// 			/>
// 			<div>
// 				<input placeholder='hi there' />
// 				<textarea autoFocus={true} spellCheck />
// 			</div>
// 		</div>
// 	);
// }
root.render(<App />);
