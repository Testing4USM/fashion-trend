// components/AnalyticsCard.tsx
import React from "react";

type AnalyticsCardProps = {
    title: string;
    value: number;
};

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ title, value }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-2xl font-bold">{value}</p>
        </div>
    );
};

export default AnalyticsCard;
