import { StyleSheet } from "react-native";
import { Colors } from '../../constants/resources';

export const HelpStyles = StyleSheet.create({
    HelpContainer: {
        height: '100%',
        width: '100%'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    header: {
        height: 80,
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    tittle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 5
    },
    settings: {
        alignContent: 'flex-start'
    },
    content: {
        padding: 40,
        alignContent: 'center',
    },
    Mod: {
        marginTop: 40,
        padding: 16,
        borderRadius: 60,
        textAlign: 'center',
        shadowColor: '#424949',
        shadowRadius: 10
    },
     firstMod:{
        marginTop: 10,
        padding: 16,
        borderRadius: 60,
        textAlign: 'center',
        shadowColor: '#424949',
        shadowRadius: 10
    },
    modalContent: {
        height: '100%',
        width: '100%',
        position: 'absolute'
    },
    modalBackground: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 1000
    },
    modalContainer: {
        height: '100%',
        width: 250,
        zIndex: 1010,
        backgroundColor: '#ffffff',
        position: 'absolute',
        top: 0,
        left: 0
    },
    menuContainer: {
        padding: 15,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    menuContent: {
        paddingTop: 50
    },
    selectContent: {
        paddingTop: 40,
        paddingBottom: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    labelStyle: {
        fontSize: 13,
        borderColor: '#bbb',
        paddingLeft:10,
        paddingRight:10
    },
    OptionMenu: {
        paddingTop: 50,
        marginTop: 25,
        flexDirection: 'column',
    },
    footerContent: {
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 12,
        backgroundColor: '#E52B2B',
        height: 50
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


