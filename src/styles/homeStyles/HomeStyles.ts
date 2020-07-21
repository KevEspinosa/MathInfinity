import {StyleSheet} from 'react-native';

export const HomeStyles = StyleSheet.create({
    HomeContainer: {
        height: '100%',
        width: '100%'
    },
    containerHome:{
        marginTop: -20, 
        width: '100%', 
        height: 100
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    cardContent: {
        borderWidth: 2,
        borderRadius: 10,
        padding: 25,
        display: 'flex',
        flexDirection: 'row',
        width: 350
    },
    cardContentimage:{
        flexDirection: 'column', 
        display: 'flex'
    },
    cardContentext:{
        fontSize: 50, 
        paddingLeft: 50
    },
    centerContainer:{
        color: '#fff', 
        alignItems: 'center', 
        fontSize: 25
    },
    cardImage:{
        height: 60, 
        width: 60
    }
});
