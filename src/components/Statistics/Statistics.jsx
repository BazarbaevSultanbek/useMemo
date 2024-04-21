import { useMemo } from "react";

const Statistics = ({ statistics }) => {
    const totalProfit = useMemo(() =>
        statistics.reduce((total, company) => total + parseFloat(company.profit.replace('mln$', '')), 0),[statistics]);

    const totalLoss = useMemo(() =>
        statistics.reduce((total, company) => total + parseFloat(company.loss.replace('mln$', '')), 0),[statistics]);

    const companyList = useMemo(() => statistics.map((company, index) => (
        <li key={index}>
            <h4>{company.name}</h4>
            <p>{company.profit}</p>
            <p>{company.loss}</p>
        </li>
    )), [statistics]);

    return (
        <div className="Statistics">
            <div className="container">
                <div className="Statistics-block">
                    <h2>Total Profit: {totalProfit} mln$</h2>
                    <h2>Total Loss: {totalLoss} mln$</h2>
                    <ul>{companyList}</ul>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
