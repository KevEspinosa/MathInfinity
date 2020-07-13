import {StyleSheet} from "react-native";

export const HomeStyles = StyleSheet.create({
    HomeContainer: {
        height: '100%',
        width: '100%'
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    cardContent: {
        backgroundColor: '#C9C9C9',
        borderRadius: 10,
        padding: 25,
        display: 'flex',
        flexDirection: 'row'
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
        width: 300,
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
        justifyContent: 'space-between'
    },
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40
    },
    menuContent: {
        paddingTop: 40
    },
    selectContent: {
        paddingTop: 20
    },
    labelStyle: {
        fontSize: 12
    },
    footerContent: {
        alignItems: 'center',
        paddingBottom: 10
    }
});
