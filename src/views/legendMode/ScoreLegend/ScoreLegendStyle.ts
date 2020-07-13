import {StyleSheet} from "react-native";

export const ScoreLegendStyles = StyleSheet.create({
    ModeContainer: {
        height: '100%',
        width: '100%'
    },
    imageContent: {
        alignItems: 'center',
        flex: 0.25,
        paddingTop: 100
    },
    content: {
        alignItems: 'center',
        flex: 1
    },
    cardContent: {
        borderRadius: 10,
        padding: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: 370
    }
});
