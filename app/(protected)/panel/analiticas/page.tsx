"use client";

import React, { useEffect, useState } from 'react';
import AnalyticsCard from './AnalyticsCard';
import { getProductCountByCategory, getTotalProductCount, getTotalStockCount, ProductCountByCategory} from '@/lib/analytics';

const AnalyticsPage: React.FC = () => {
    const [productCountByCategory, setProductCountByCategory] = useState<ProductCountByCategory[]>([]);
    const [totalProductCount, setTotalProductCount] = useState<number>(0);
    const [totalStockCount, setTotalStockCount] = useState<number>(0);

    useEffect(() => {
        async function fetchData() {
            try {
                const productCounts = await getProductCountByCategory();
                const totalProducts = await getTotalProductCount();
                const totalStock = await getTotalStockCount();

                setProductCountByCategory(productCounts);
                setTotalProductCount(totalProducts);
                setTotalStockCount(totalStock);
            } catch (error) {
                console.error('Error fetching analytics data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4 bg-black text-green-500">
            <h1 className="text-3xl font-bold mb-4">Analíticas</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <AnalyticsCard title="Total Productos" value={totalProductCount} />
                <AnalyticsCard title="Total Stock" value={totalStockCount} />
                {productCountByCategory.map((category) => (
                    <AnalyticsCard
                        key={category.categoryId}
                        title={`Categoría ${category.categoryId}`}
                        value={category._count._all}
                    />
                ))}
            </div>
        </div>
    );
};

export default AnalyticsPage;
