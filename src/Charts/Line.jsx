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
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
        color: COLORS.interviewing,
    },

];

const categories=["Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sep","Oct","Nov","Dec"];

const Line=props => {
    return (
        <Chart pannable style={{height: 350}}>
            <ChartTitle />
            <ChartLegend position="top" orientation="horizontal" />
            <ChartValueAxis>
                <ChartValueAxisItem min={0} max={100} majorGridLines={false} />
            </ChartValueAxis>
            <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={categories} majorGridLines={false} />
            </ChartCategoryAxis>
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

export default Line;