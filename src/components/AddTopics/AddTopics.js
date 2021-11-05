import React, { useContext, useEffect, useState } from 'react';
import { documentationContext } from '../../context/DocumentationContext';
import AddMainTopic from '../AddMainTopic/AddMainTopic';
import './AddTopics.css'
const AddTopics = () => {
	const [topic, setTopic] = useState({
		subTopicTitle: "",
		firstDescription: "",
		img: "",
		secondDescription: ""

	})
	const [selectValue, setSelectValue] = useState()
	const { getTopics, topicsList,addSubTopic } = useContext(documentationContext)
	useEffect(() => {
		getTopics()
	}, [])



	const handleValues = (e) => {
		let newSubTopic = {
			...topic,
			[e.target.name]: e.target.value
		}
		setTopic(newSubTopic)
	}
	const handleClick = () => {
		addSubTopic(topic, selectValue)
		setTopic({
			subTopicTitle: "",
			firstDescription: "",
			img: "",
			secondDescription: ""
	
		})
	}
	return (
		<div className="add-topics">
			<div>
				<h2>Добавить топик</h2>
				<AddMainTopic />
			</div>
			<div className="add-sub-topics">
				<h2>Добавить дочерний топик</h2>
				<select onChange={(e) => setSelectValue(e.target.value)}>
		
					{topicsList.map(item => (
						<option value={item.id} key={item.id}>{item.topicTitle}</option>
					))}
				</select>
				<input onChange={handleValues}
					name="subTopicTitle"
					value={topic.subTopicTitle}
					placeholder="Заголовок"
					type="text" />
				<input onChange={handleValues}
					name="firstDescription"
					value={topic.firstDescription}
					placeholder="Описание"
					type="text" />
				<input
					onChange={handleValues}
					name="img" value={topic.img}
					placeholder="Изображение"
					type="text" />
				<input
					onChange={handleValues}
					name="secondDescription"
					value={topic.secondDescription}
					placeholder="Описание"
					type="text" />
				<button onClick={handleClick}>Добавить</button>
			</div>
		</div>
	);
};

export default AddTopics;