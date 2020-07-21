import {StyleSheet} from 'react-native';

export const MenuStyles = StyleSheet.create({
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
    avatarTitle:{
        color: '#000', 
        backgroundColor: '#CACACA', 
        padding: 29
    },
    menuContent: {
        paddingTop: 40
    },
    pickeds:{
        height: 50, 
        width: '100%'
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
