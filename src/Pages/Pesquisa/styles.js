import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    categorias: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    main: {
        padding: 10,
    },
    cardCategorias: {
        backgroundColor: "#FF0000",
        width: "48%",
        height: 80,
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
    }
})

export default styles