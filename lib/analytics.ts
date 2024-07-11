// lib/analytics.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export type ProductCountByCategory = {
    categoryId: string;
    _count: {
      _all: number;
    };
  };
  
export async function getProductCountByCategory(): Promise<ProductCountByCategory[]> {
    try {
        const result = await prisma.product.groupBy({
            by: ['categoryId'],
            _count: {
                _all: true,
            },
        });

        return result.map((item) => ({
            categoryId: item.categoryId,
            _count: {
                _all: item._count._all,
            },
        }));
    } catch (error) {
        console.error('Error fetching product counts by category:', error);
        return [];
    }
}
  
export async function getTotalProductCount(): Promise<number> {
    try {
        const result = await prisma.product.count();
        return result;
    } catch (error) {
        console.error('Error fetching total product count:', error);
        return 0;
    }
}

export async function getTotalStockCount(): Promise<number> {
    try {
        const result = await prisma.product.aggregate({
            _sum: {
                stock: true,
            },
        });
        return result._sum.stock ?? 0;
    } catch (error) {
        console.error('Error fetching total stock count:', error);
        return 0;
    }
}