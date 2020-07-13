import * as React from 'react';
import {Text, View} from 'react-native';
import {Avatar, Button, Header} from 'react-native-elements';

import {LegendModeStyle} from './LegendModeStyles';

const LegendModeView = ({ navigation }) => {
    return (
        <View style={LegendModeStyle.ModeContainer}>
            <Header
                placement="center"
                containerStyle={{marginTop: -20, width: '100%', height: 100}}
                leftComponent={{icon: 'arrow-back', color: '#fff', onPress: () => navigation.navigate('Mode'), size: 30}}
                centerComponent={{text: 'Leyenda', style: { color: '#fff', alignItems: 'center', fontSize: 25}}}
            />
            <View style={LegendModeStyle.textStyle}>
                <Text style={{fontSize: 30, alignSelf: 'center'}}>
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
