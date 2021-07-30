import {StyleSheet} from "react-native";

export const HomeStyles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 30,
        backgroundColor: 'coral',
        flexDirection: 'row',
        justifyContent:'center',
    },
    tittle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing:5
    },
    settings: {
       alignContent:'flex-start'
    },
    content:{
        padding: 40,
        alignContent:'center',
    },
    Mod:{
        marginTop: 20,
        padding: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle:'dashed',
        borderRadius: 10,
        textAlign:'center',
        
    }
});


