import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    filters: {
        width: "100%",
        flexDirection: "row",
        paddingVertical: 15,
        justifyContent: "space-evenly"
    },
    buttonQuery: {
        width: 85,
        height: 35,
        backgroundColor: "#f50d41",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    textButtonQuery: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 18
    }
});

export default styles;