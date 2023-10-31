import React, { Fragment } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export function QuotationList() {
    return(
        <Fragment>
            <View style={styles.filters}>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => {}}
                >
                    <Text style={styles.textButtonQuery}>7 Days</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => {}}
                >
                    <Text style={styles.textButtonQuery}>15 Days</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => {}}
                >
                    <Text style={styles.textButtonQuery}>1 Month</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => {}}
                >
                    <Text style={styles.textButtonQuery}>3 Months</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => {}}
                >
                    <Text style={styles.textButtonQuery}>6 Months</Text>
                </TouchableOpacity>
            </View>
        </Fragment>
    )
}