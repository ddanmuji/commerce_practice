import { Client } from '@notionhq/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

const addItem = async (name: string) => {
	if (!databaseId) throw Error('not vaild databaseId');
	try {
		const response = await notion.pages.create({
			parent: { database_id: databaseId },
			properties: {
				title: {
					title: [
						{
							text: {
								content: name
							}
						}
					]
				}
			}
		});
		console.log(response);
		console.log('Success! Entry added.');
	} catch (error: any) {
		console.error(JSON.stringify(error));
	}
};

type Data = {
	message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const { name } = req.query;
	if (!name) return res.status(400).json({ message: 'No name' });

	try {
		await addItem(String(name));
		return res.status(200).json({ message: `Success ${name} added` });
	} catch (error) {
		return res.status(200).json({ message: `Fail ${name} added` });
	}
}
