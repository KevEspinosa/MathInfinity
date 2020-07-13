import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {Header} from 'react-native-elements';

import {GameClassicStyle} from './GamelClassicStyles';

const GameClassicView = ({ navigation }) => {
    return (
        <View style={GameClassicStyle.ModeContainer}>
            <Header
                placement="center"
                containerStyle={{marginTop: -20, width: '100%', height: 100}}
                leftComponent={{icon: 'arrow-back', color: '#fff', onPress: () => navigation.navigate('ClassicMode'), size: 30}}
                centerComponent={{text: 'Clásico', style: { color: '#fff', alignItems: 'center', fontSize: 25}}}
            />
            <View style={GameClassicStyle.GameContainer}>
                <View>
                    <View style={{alignSelf: 'center', paddingBottom: 40, paddingTop: 300}}>
                        <Text style={{fontSize: 35}}>¿Cuánto es?</Text>
                    </View>
                    <View style={{alignSelf: 'center', paddingBottom: 50}}>
                        <Text style={{fontSize: 50, fontWeight: 'bold'}}>5 + 1</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', display: 'flex', justifyContent: 'center'}}>
                    <View style={{flexDirection: 'column', backgroundColor: '#DFDFDF', borderRadius: 50, marginRight: 30}}>
                        <View style={{padding: 30}}>
                            <Text style={{fontWeight: 'bold', fontSize: 30}}>5</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'column', backgroundColor: '#DFDFDF', borderRadius: 50, marginRight: 30}}>
                        <View style={{padding: 30}}>
                            <Text style={{fontWeight: 'bold', fontSize: 30}}>6</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'column', backgroundColor: '#DFDFDF', borderRadius: 50, marginRight: 30}}>
                        <View style={{padding: 30}}>
                            <Text style={{fontWeight: 'bold', fontSize: 30}}>7</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'column', backgroundColor: '#DFDFDF', borderRadius: 50}}>
                        <View style={{padding: 30}}>
                            <Text style={{fontWeight: 'bold', fontSize: 30}}>1</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default React.memo(GameClassicView);
