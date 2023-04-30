import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    imagemPromo: {
        width: "94%",
        height: 200,
        margin: 10,
        borderRadius: 10,
    },
    navCategorias: {
        height: 100,
        padding: 10,
        backgroundColor: "white",
        justifyContent: 'center',
    },
    categoriaImagem: {
        width: 35,
        height: 35,
        marginRight: 10,
        borderRadius: 50,
    },
    cardCategorias: {
        flexDirection: "row",
        marginRight: 10,
        width: 150,
        height: 50,
        paddingHorizontal: 15,
        borderRadius: 15,
        backgroundColor: "#F8F8F8",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    produtos: {
        padding: 10,
        backgroundColor: "#FFF",
        marginTop: 10,
        flex: 1,
        alignItems: "center",
    }
})

export default styles