import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTitle,
    ChartLegend,
} from "@progress/kendo-react-charts";

const COLORS={
    interviewing: "#2563EB",
};

export const series=[
    {
        name: "Number of patients over past years ",
        data: [0,0,0,0,0,0,50,0,0,0,0,0],
        color: COLORS.interviewing,
    },

];

const categories=["0","10","20","30","40","50","60","70","80","90","100"];

const Lines=props => {
    return (
        <Chart pannable style={{height: 350}}>
            <ChartTitle />
            <ChartLegend position="top" orientation="horizontal" />
            <ChartCategoryAxis>
                <ChartCategoryAxisItem min={10} max={100} majorGridLines={false} />
            </ChartCategoryAxis>
            <ChartValueAxis>
                <ChartValueAxisItem categories={categories} majorGridLines={false} />
            </ChartValueAxis>
            <ChartSeries>
                {series.map((item,idx) => (
                    <ChartSeriesItem
                        key={idx}
                        type="line"
                        tooltip={{visible: true}}
                        data={item.data}
                        name={item.name}
                    />
                ))}
            </ChartSeries>
        </Chart>
    );
};

export default Lines;