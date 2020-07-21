import {StyleSheet} from 'react-native';

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
        borderWidth: 2,
        borderRadius: 10,
        padding: 25,
        display: 'flex',
        flexDirection: 'row',
        width: 350
    },
});
