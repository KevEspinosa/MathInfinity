import { StyleSheet } from "react-native";
import { Colors } from '../../constants/resources';

export const ScoreStyles = StyleSheet.create({
    ScoreContainer: {
        height: '100%',
        width: '100%'
    },
    header: {
        height: 80,
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    content: {
        alignContent: 'center',
    },
    firstplace: {
        marginTop: 10,
        padding: 16,
        borderRadius: 60,
        textAlign: 'center',
        shadowColor: '#ffd700',
        shadowRadius: 10
    },
    Mod: {
        marginTop: 10,
        padding: 16,
    },
    firstMod: {
        marginTop: 10,
        padding: 16,
        borderRadius: 60,
        textAlign: 'center',
        shadowColor: '#424949',
        shadowRadius: 10,
    },
    secondplace: {
        marginTop: 10,
        padding: 16,
        borderRadius: 60,
        textAlign: 'center',
        shadowColor: '#b22222',
        shadowRadius: 10,
    },
    thirdplace: {
        marginTop: 10,
        padding: 16,
        borderRadius: 60,
        textAlign: 'center',
        shadowColor: '#cd853f',
        shadowRadius: 10,
    },
    place: {
        marginTop: 10,
        padding: 16,
        borderRadius: 60,
        textAlign: 'center',
        shadowColor: '#808080',
        shadowRadius: 10,
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
    avatarContainer: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    avatarImage: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    avatarText: {
        paddingTop: 4,
        fontSize: 18,
        fontWeight: 'bold',
    },
});


