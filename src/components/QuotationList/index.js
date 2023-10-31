import React, { Fragment } from "react";
import { View, ScrollView, FlatList, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import QuotationItems from "./QuotationItems";

export function QuotationList(props) {
    const daysQuery = props.filterDay
    return(
        <Fragment>
            <View style={styles.filters}>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => daysQuery(720)}
                >
                    <Text style={styles.textButtonQuery}>2 Years</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => daysQuery(1080)}
                >
                    <Text style={styles.textButtonQuery}>3 Years</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => daysQuery(1440)}
                >
                    <Text style={styles.textButtonQuery}>4 Years</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => daysQuery(800)}
                >
                    <Text style={styles.textButtonQuery}>5 Years</Text>
                </TouchableOpacity>
            </View>
                <FlatList 
                data={props.listTransactions}
                renderItem={({item}) => {
                    return <QuotationItems valor={item.valor} data={item.data}/>
                }}
                />
        </Fragment>
    )
}