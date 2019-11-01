import axios from 'axios';
import dotenv from 'dotenv';
import cheerio from 'cheerio';

dotenv.config();


(async () => {
	const baseURL = `http://api.serpstack.com/search?access_key=${process.env.serpstackAPIKey}`;

	const axiosResponse = await axios.get(`${baseURL}&query=commercial insurance&location=boise&type=images`);

	console.log('axios response data', axiosResponse.data);

})();