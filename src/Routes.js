import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddTopics from './components/AddTopics/AddTopics';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import TopicDetails from './components/TopicDetails/TopicDetails';

const Routes = () => {
	return (
		<BrowserRouter>
			<Header/>
			<Switch>
				<Route exact path="/" component={HomePage}/>
				<Route exact path="/add" component={AddTopics}/>
				<Route exact path="/details/:id" component={TopicDetails} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;