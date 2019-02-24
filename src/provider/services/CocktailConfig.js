import { Settings, APIConnector } from '../base';

const apiConnector = new APIConnector( { timeout: 50000 } );

export default class ServiceConfig {
	static get endpoint() {
		return `${Settings.apiRestEndpoint}`;
	}

	static get cocktails() {
		return `${ServiceConfig.endpoint}/filter.php?g=Cocktail_glass`;
	}

	static get APIConnector() {
		return apiConnector;
	}
}
