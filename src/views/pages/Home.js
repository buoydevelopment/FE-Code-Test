import React, { Component } from 'react';

class Page extends Component {
	componentDidMount() {
		let data_var = 'Templete de React.JS con Bootstrap y sus dependencias. Para proyecto Inicial.';
		this.props.set_test(data_var);
	}

	render() {
		return(
			<div className="page-container">
				<div className="table-responsive">
					<h1 className="page-heading">{this.props.test}</h1>
					<table className="table">
						<thead className="thead-dark">
							<tr>
								<th scope="col">"name": "template"</th>
								<th scope="col">"version": "0.1.0"</th>
								<th scope="col">"private": true</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="table-primary">"dependencies":</td>
								<td className="table-secondary">"scripts":</td>
							</tr>
							<tr>
								<td>"ajv": "^6.5.2"</td>
								<td>"start": "react-scripts start"</td>
							</tr>
							<tr>
								<td>"ajv-keywords": "^3.2.0"</td>
								<td>"build": "react-scripts build"</td>
							</tr>
							<tr>
								<td>"bootstrap": "^4.1.2"</td>
								<td>"test": "react-scripts test --env=jsdom"</td>
							</tr>
							<tr>
								<td>"jquery": "^3.3.1"</td>
								<td>"eject": "react-scripts eject"</td>
							</tr>
							<tr>
								<td>"prop-types": "^15.6.2"</td>
							</tr>
							<tr>
								<td>"react": "^16.4.1"</td>
							</tr>
							<tr>
								<td>"react-dom": "^16.4.1"</td>
							</tr>
							<tr>
								<td>"react-redux": "^5.0.7"</td>
							</tr>
							<tr>
								<td>"react-scripts": "1.1.4"</td>
							</tr>
							<tr>
								<td>"redux": "^4.0.0"</td>
							</tr>
							<tr>
								<td>"redux-logger": "^3.0.6"</td>
							</tr>
							<tr>
								<td>"redux-thunk": "^2.3.0"</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
export default Page;
