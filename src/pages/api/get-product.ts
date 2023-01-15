import { PrismaClient, products } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const getProduct = async (id: number) => {
	try {
		const response = await prisma.products.findUnique({
			where: { id }
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
	const { id } = req.query;
	if (!id) return res.status(400).json({ message: 'no id' });

	try {
		const product = await getProduct(Number(id));
		if (!product) return res.status(400).json({ message: 'no product' });

		return res.status(200).json({ product, message: 'Success' });
	} catch (error) {
		return res.status(400).json({ message: 'Failed' });
	}
};

export default handler;
