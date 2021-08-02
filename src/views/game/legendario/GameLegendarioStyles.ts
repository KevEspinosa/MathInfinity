import { StyleSheet } from "react-native";
import { Colors } from '../../../constants/resources';

export const GameLeyendaStyles = StyleSheet.create({
    HomeContainer: {
        height: '100%',
        width: '100%'
    },
    headerContainer: {
        width: '100%',
        height: 50,
        backgroundColor: Colors.PRIMARY.BASE,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
    },
    menuIcon: {
        width: 20,
        height: 20,
        tintColor: Colors.WHITE.BASE,
        position: 'absolute',
        top: 15,
        left: 30,
    },
    headerTitle: {
        color: Colors.WHITE.BASE,
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 5,
    },

    OptionBotton: {
        flex: 1,
        margin: 6,
        alignContent: 'center',
        borderRadius: 60,
        shadowColor: '#272426',
        shadowRadius: 10,
        justifyContent: 'center',
    },
});


