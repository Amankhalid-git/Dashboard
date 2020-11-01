import React from 'react'
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

function WidgetDoughnut(props) {
    const chartConfigs = {
        type: "doughnut2d", 
        width: "100%", 
        height: "200", 
        dataFormat: "json", 
        dataSource: {
          chart: {
            theme: "fusion", 
            bgColor: "#FFFFFF",              
          },
          data: props.data
        }
      };
    return (
        <div className="widgetWrap">
          <div className="widgetTitle">
       {props.title}
        </div>
           <div className="widgetValue">
          
          <ReactFC {...chartConfigs} />

       </div>
                     </div>
       
    )
}

export default WidgetDoughnut;
