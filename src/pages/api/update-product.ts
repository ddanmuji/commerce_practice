import { PrismaClient, products } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const updateProduct = async (id: number, contents: string) => {
	try {
		const response = await prisma.products.update({
			where: { id },
			data: { contents }
		});
		return response;
	} catch (error) {
		console.error(error);
	}
};

type ResponseData = {
	message: string;
	product?: products;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
	const { id, contents } = JSON.parse(req.body);
	console.log('id', id);
	console.log('contents', contents);

	if (!id || !contents) return res.status(400).json({ message: 'no id or contents' });

	try {
		const product = await updateProduct(Number(id), String(contents));
		return res.status(200).json({ product, message: 'Success' });
	} catch (error) {
		return res.status(400).json({ message: 'Failed' });
	}
};

export default handler;
