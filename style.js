import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#333'
    },
    loadingArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText: {
        color: '#fff'
    },
    totalMoviesText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10,
    },
    list: {
        flex: 1,
        marginBottom:40
    },
    card: { 
        marginBottom: 30,
    },
    movieTitle: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10,
    },
    movieImage: {
        height: 400, 
    }
})