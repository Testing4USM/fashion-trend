// pages/api/analytics.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getProductCountByCategory, getTotalProductCount, getTotalStockCount } from '@/lib/analytics';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const productCountByCategory = await getProductCountByCategory();
        const totalProductCount = await getTotalProductCount();
        const totalStockCount = await getTotalStockCount();

        res.status(200).json({ productCountByCategory, totalProductCount, totalStockCount });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch analytics data' });
    }
}
