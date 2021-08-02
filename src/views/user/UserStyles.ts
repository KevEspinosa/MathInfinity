import { StyleSheet } from "react-native";
import { Colors } from '../../constants/resources';

export const UserStyle = StyleSheet.create({
    ModeContainer: {
        flex: 1
    },
    content: {
        marginTop: 15,
        alignItems: 'center'
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
    text: {
        fontFamily: 'monospace',
        fontSize: 19,
        fontWeight: 'bold'
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