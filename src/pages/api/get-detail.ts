import { Client } from '@notionhq/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

interface GetDetailQuery {
	pageId: string;
	propertyId: string;
}

const getDetailItem = async ({ pageId, propertyId }: GetDetailQuery) => {
	if (!databaseId) throw Error('not vaild databaseId');
	try {
		const response = await notion.pages.properties.retrieve({
			page_id: pageId,
			property_id: propertyId
		});
		return response;
	} catch (error: any) {
		console.error(JSON.stringify(error));
	}
};

type Data = {
	message: string;
	item?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	try {
		const { pageId, propertyId } = req.query;
		const response = await getDetailItem({ pageId, propertyId } as GetDetailQuery);

		return res.status(200).json({ item: response, message: `Success get items` });
	} catch (error) {
		return res.status(500).json({ message: `Failed get items` });
	}
}
