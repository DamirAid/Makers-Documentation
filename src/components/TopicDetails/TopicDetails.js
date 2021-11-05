import React, { useContext, useEffect } from 'react';
import { documentationContext } from '../../context/DocumentationContext';
import SideBar from '../SideBar/SideBar';
import './TopicDetails.css'
const TopicDetails = (props) => {
	const { getTopicDetails, topicDetails } = useContext(documentationContext)
	useEffect(() => {
		getTopicDetails(props.match.params.id)
	}, [])

	return (
		<div className="container">
			<div className="wrapper">

				<div className="topic-details">
					{topicDetails.topicTitle ? (
						<>
							<h1>{topicDetails.topicTitle}</h1>
							{topicDetails.subTopics.map((item, index) => (
								<div className="sub-topic">
									<h2>{item.subTopicTitle}</h2>
									<p>{item.firstDescription}</p>
									<div>
										<img src={item.img} alt="topic img" />
									</div>
									<p>{item.secondDescription}</p>
								</div>
							))}
						</>
					) : (
						<h1>Loading</h1>
					)}

				</div>
				<SideBar />
			</div>
		</div>

	);
};

export default TopicDetails;