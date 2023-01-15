import { PrismaClient, products } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const getProducts = async () => {
	try {
		const response = await prisma.products.findMany();
		return response;
	} catch (error) {
		console.error(error);
	}
};

type ResponseData = {
	message: string;
	products?: products[];
};

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
	try {
		const products = await getProducts();
		return res.status(200).json({ products, message: 'Success' });
	} catch (error) {
		return res.status(400).json({ message: 'Failed' });
	}
};

export default handler;
