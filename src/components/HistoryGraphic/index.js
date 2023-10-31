import React from "react";
import { View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export function HistoryGraphic(props) {

    return(
        <View>           
            <LineChart 
               data={{
                datasets: [
                  {
                    data: 
                        props.infoDataGraphic                    
                  }
                ]
              }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                withVerticalLines={false}
                yLabelsOffset={1}
                withVerticalLabels={false}
                chartConfig={{
                    backgroundColor: "#000000",
                    backgroundGradientFrom: "#1E2923",
                    backgroundGradientTo: "#08130D",
                    backgroundGradientToOpacity: 0.5,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,                    
                    propsForDots: {
                        r: "1",
                        strokeWidth: "1",
                        stroke: "#ffa726"
                    }
                }}
                bezier
            />
        </View>
    )
}