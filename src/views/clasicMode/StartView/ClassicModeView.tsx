import * as React from 'react';
import {Text, View} from 'react-native';
import {Avatar, Button, Header} from 'react-native-elements';

import {ClassicModeStyle} from './ClassicModeStyles';

const ClassicModeView = ({ navigation }) => {
    return (
        <View style={ClassicModeStyle.ModeContainer}>
            <Header
                placement="center"
                containerStyle={{marginTop: -20, width: '100%', height: 100}}
                leftComponent={{icon: 'arrow-back', color: '#fff', onPress: () => navigation.navigate('Mode'), size: 30}}
                centerComponent={{text: 'Clásico', style: { color: '#fff', alignItems: 'center', fontSize: 25}}}
            />
            <View style={ClassicModeStyle.textStyle}>
                <Text style={{fontSize: 30, textAlign: 'center'}}>
                    No tienes tiempo para contestar cada pregunta, diviértete y aprende cada día más.
                </Text>
                <Text style={{fontSize: 30, textAlign: 'center', paddingTop: 10}}>
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
