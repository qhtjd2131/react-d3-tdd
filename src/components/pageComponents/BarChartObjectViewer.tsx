import React from "react";
import { BarChartData } from "./BarChart";
import * as style from "./BarChartObjectViewer.style"


interface BarChartObjectViewerProps {
    data : BarChartData[];
}
const BarChartObjectViewer = ( props : BarChartObjectViewerProps) => {

    const {data} = props;

    // Object viewer를 어떻게 보여줄것인가?

    const ObjectViewer = data.map((d, index)=>{
        return(

        )
    })

    return(
        <style.ObjectViewerWrapper>
            
        </style.ObjectViewerWrapper>
    )
}

export default BarChartObjectViewer;