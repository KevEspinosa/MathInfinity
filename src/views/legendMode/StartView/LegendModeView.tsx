import * as React from 'react';
import {Text, View} from 'react-native';
import {Avatar, Button} from 'react-native-elements';

import {LegendModeStyle} from './LegendModeStyles';

const LegendModeView = ({ navigation }) => {
    return (
        <View style={LegendModeStyle.ModeContainer}>
            <View style={LegendModeStyle.textStyle}>
                <Text style={{fontSize: 40, alignSelf: 'center'}}>
                    El modo leyenda
                </Text>
                <Text style={{fontSize: 30, alignSelf: 'center', paddingTop: 80}}>
                    Tu tiempo es limitado
                </Text>
                <Text style={{fontSize: 30, alignSelf: 'center', paddingTop: 10}}>
                    Tienes solamente 5min
                </Text>
                <Text style={{fontSize: 30, alignSelf: 'center', paddingTop: 10}}>
                    No puedes adicionar
                </Text>
                <Text style={{fontSize: 30, alignSelf: 'center', paddingTop: 10}}>
                    tiempo extra.
                </Text>
            </View>
            <View style={{alignItems: 'center'}}>
                <Avatar
                    size="xlarge"
                    rounded
                    source={require('../../../images/cerebro.png')}
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

export default React.memo(LegendModeView);
