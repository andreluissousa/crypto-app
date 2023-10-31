import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    filters: {
        width: "100%",
        flexDirection: "row",
        paddingVertical: 15,
        justifyContent: "space-evenly"
    },
    buttonQuery: {
        width: 74,
        height: 30,
        backgroundColor: "#f50d41",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    textButtonQuery: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 16
    }
});

export default styles;