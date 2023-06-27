import './index.css';
import reportWebVitals from './reportWebVitals';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
const ToDoRouter = lazy(() => import(/* webpackChunkName: "VidtuRouter" */ './router'));

const root = createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
			<App />
	</React.StrictMode>
);

function App() {
	
	return (
				<Suspense fallback={<>...</>}>
					<ToDoRouter />
				</Suspense>
	);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
