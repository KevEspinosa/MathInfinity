import * as React from 'react';
import {Text, View} from 'react-native';
import {Avatar, Button, Header} from "react-native-elements";

import {FasterModeStyle} from './FasterModeStyles';

const FasterModeView = ({ navigation }) => {
    return (
        <View style={FasterModeStyle.ModeContainer}>
            <Header
                placement="center"
                containerStyle={{marginTop: -20, width: '100%', height: 100}}
                leftComponent={{icon: 'arrow-back', color: '#fff', onPress: () => navigation.navigate('Mode'), size: 30}}
                centerComponent={{text: 'Rápido', style: { color: '#fff', alignItems: 'center', fontSize: 25}}}
            />
            <View style={FasterModeStyle.textStyle}>
                <Text style={{fontSize: 30, textAlign: 'center'}}>
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
                        onPress={() => navigation.navigate('GameFaster')}
                    />
                </View>
            </View>
        </View>
    );
}

export default React.memo(FasterModeView);
