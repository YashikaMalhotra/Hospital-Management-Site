import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
} from "@progress/kendo-react-charts";

const COLORS={
    accepted: "#059669",
    rejected: "#B91C1C",
    interviewing: "#2563EB",
    total: "#D97706",
};
//RENDER TOOLTIP CODE 
const renderTooltip=context => {
    const {category,value}=context.point||context;
    return (
        <div>
            {category}: {value}%
        </div>
    );
};


// Graph data
const applicationsStatusThisMonth=[
    {
        status: "Operation Report",
        value: 4,
        color: COLORS.accepted,
    },
    {
        status: "Birth Report",
        value: 2,
        color: COLORS.interviewing,
    },
    {
        status: "Death Report",
        value: 1,
        color: COLORS.rejected,
    },
];

// Show category label for each item in the donut graph
const labelContent=e => e.category;

const Charts=props => {
    return (
        <Chart>
            <ChartTitle />
            <ChartLegend visible={false} />
            <ChartTooltip render={renderTooltip} />
            <ChartSeries>
                <ChartSeriesItem
                    type="donut"
                    data={applicationsStatusThisMonth}
                    categoryField="status"
                    field="value"
                >
                    <ChartSeriesLabels
                        color="#fff"
                        background="none"
                        content={labelContent}
                    />
                </ChartSeriesItem>
            </ChartSeries>
        </Chart>
    );
};

export default Charts;