import * as React from 'react';
import './Spinner.scss';

const Spinner = (props) => {
	return (
		<div className="spinner-container">
			<div className="spinning-circle" />
			<h2 className="title">{props.message}</h2>
		</div>
	);
};

export default Spinner;