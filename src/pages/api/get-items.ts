import { Client } from '@notionhq/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

const getItem = async () => {
	if (!databaseId) throw Error('not vaild databaseId');
	try {
		const response = await notion.databases.query({
			database_id: databaseId,
			sorts: [
				{
					property: 'price',
					direction: 'ascending'
				}
			]
		});
		return response;
	} catch (error: any) {
		console.error(JSON.stringify(error));
	}
};

type Data = {
	message: string;
	items?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	try {
		const response = await getItem();
		return res.status(200).json({ items: response?.results, message: `Success get items` });
	} catch (error) {
		return res.status(500).json({ message: `Failed get items` });
	}
}
