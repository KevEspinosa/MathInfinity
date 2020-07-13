import * as React from 'react';
import {Text, View} from 'react-native';
import {Avatar, Button} from "react-native-elements";

import {FasterModeStyle} from './FasterModeStyles';

const FasterModeView = ({ navigation }) => {
    return (
        <View style={FasterModeStyle.ModeContainer}>
            <View style={FasterModeStyle.textStyle}>
                <Text style={{fontSize: 40, alignSelf: 'center'}}>
                    El modo rápido
                </Text>
                <Text style={{fontSize: 30, textAlign: 'center', paddingTop: 80}}>
                    Tu tiempo se va aumentando a medida que vas contestando correctamente, si respondes incorrectamente se restara 5 seg.
                </Text>
            </View>
            <View style={{alignItems: 'center'}}>
                <Avatar
                    size="xlarge"
                    rounded
                    source={require('../../../images/guerra.png')}
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

export default React.memo(FasterModeView);
