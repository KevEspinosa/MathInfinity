import * as React from 'react';
import {Text, View} from 'react-native';
import {Avatar, Button} from 'react-native-elements';

import {ClassicModeStyle} from './ClassicModeStyles';

const ClassicModeView = ({ navigation }) => {
    return (
        <View style={ClassicModeStyle.ModeContainer}>
            <View style={ClassicModeStyle.textStyle}>
                <Text style={{fontSize: 40, alignSelf: 'center'}}>
                    El modo clásico
                </Text>
                <Text style={{fontSize: 30, textAlign: 'center', paddingTop: 80, margin: 5}}>
                    No tienes tiempo para contestar cada pregunta, diviértete y aprende cada día más.
                </Text>
                <Text style={{fontSize: 30, textAlign: 'center', paddingTop: 10, margin: 5}}>
                    Es una buena forma de entrenarte para modos más desafiantes.
                </Text>
            </View>
            <View style={{alignItems: 'center'}}>
                <Avatar
                    size="xlarge"
                    rounded
                    source={require('../../../images/pirata.png')}
                />
                <View style={{paddingTop: 40, paddingBottom: 100}}>
                    <Button
                        title="Jugar"
                        titleStyle={{fontSize: 25, padding: 40}}
                    />
                </View>
            </View>
        </View>
    );
}

export default React.memo(ClassicModeView);
