import axios from 'axios';
import React, { useReducer } from 'react';

export const documentationContext = React.createContext()

const INIT_STATE = {
	topicsList: [],
	topicDetails: {}
}
const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case "GET_TOPICS":
			return { ...state, topicsList: action.payload }
		case "GET_TOPIC_DETAILS":
			return {...state, topicDetails: action.payload}	
		default:
			return state

	}
}


const DocumentationContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INIT_STATE)

	const getTopics = async () => {
		const { data } = await axios('http://localhost:8000/topics')
		dispatch({
			type: "GET_TOPICS",
			payload: data
		})
	}


		const addMainTopic = async (topic) => {
		await axios.post('http://localhost:8000/topics', topic)
		getTopics()
	}

	const addSubTopic = async (newSubTopic, id) => {

		let item = state.topicsList.find(item => item.id == id)
		item.subTopics.push(newSubTopic)
		await axios.patch(`http://localhost:8000/topics/${id}`, item)
		getTopics()
	}



	const getTopicDetails = async (id) => {
		const {data} = await axios(`http://localhost:8000/topics/${id}`)
		dispatch({
			type: "GET_TOPIC_DETAILS",
			payload: data
		})
	}

	const editTopicDetails = async (newTopic) => {
		await axios.patch(`http://localhost:8000/topics/${newTopic.id}`, newTopic)
		getTopics()
	}

	return (
		<documentationContext.Provider value={{
			topicsList: state.topicsList,
			topicDetails: state.topicDetails,
			getTopics,
			addMainTopic,
			addSubTopic,
			getTopicDetails,
			editTopicDetails
		}}>
			{children}

		</documentationContext.Provider>
	);
};

export default DocumentationContextProvider;