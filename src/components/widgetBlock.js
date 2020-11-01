import React from 'react';

//fusion cahrt imports
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);


function Barwidget(props) {

    const chartConfigs = {
        type: "column3d", // The chart type
        width: "100%", // Width of the chart
        height: "300", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
        // Chart Configuration
        chart: {
            bgColor:"#FFFFFF",
            theme: "fusion"  
        },
        // Chart Data - from step 2
        data: props.data
        }
    };

    return (
    <div>
        <div className="widgetWrap">
            <div className="widgetTitle">       
            {props.title}
            </div>
            <div className="widgetValue">
              <ReactFC {...chartConfigs} />
              </div>
        </div>
    </div>
    )
}

export default Barwidget;
