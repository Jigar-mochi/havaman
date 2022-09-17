import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Weather from '../pages/weather';
import News from '../pages/news';
import Navbar from '../Components/navbar';
import Scrollbutton from '../Components/scrollButtobn';

function AppRoutes() {
	const pagesize = 18;
	const apikey = process.env.REACT_APP_APIKEYOFNEWS;

	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" index element={<Weather />} />
					<Route
						path="news"
						element={
							<News
								pagesize={pagesize}
								country="in"
								category="general"
								apikey={apikey}
							/>
						}
					/>
					<Route
						path="health"
						element={
							<News
								pagesize={pagesize}
								country="in"
								category="health"
								apikey={apikey}
							/>
						}
					/>

					<Route
						path="science"
						element={
							<News
								pagesize={pagesize}
								country="in"
								category="science"
								apikey={apikey}
							/>
						}
					/>
					<Route
						path="technology"
						element={
							<News
								pagesize={pagesize}
								country="in"
								category="technology"
								apikey={apikey}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
			<Fragment>
				<Scrollbutton />
			</Fragment>
		</div>
	);
}

export default AppRoutes;
