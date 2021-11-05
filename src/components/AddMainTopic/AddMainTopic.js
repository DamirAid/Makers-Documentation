import React, {useContext, useState} from 'react';
import { documentationContext } from '../../context/DocumentationContext';

const AddMainTopic = () => {
	const [title, setTitle] = useState('')
	const { addMainTopic } = useContext(documentationContext)

	const handleAddTopic = () => {
		const newTopic = {
			topicTitle: title,
			subTopics: []
		}
		addMainTopic(newTopic)
		setTitle('')

	}
	return (
		<div className="add-main-topics">
			<input value={title} placeholder="Название топика" type="text" onChange={(e) => setTitle(e.target.value)} />
			<button onClick={handleAddTopic}>Добавить</button>

		</div>
	);
};

export default AddMainTopic;