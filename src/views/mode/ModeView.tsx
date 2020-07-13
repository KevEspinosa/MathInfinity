import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {ModeStyles} from './ModeStyles';

const ModeView = ({ navigation }) => {
    return (
        <View style={ModeStyles.ModeContainer}>
            <View style={{paddingBottom: 30}}>
                <TouchableOpacity onPress={() => navigation.navigate('LegendMode')}>
                    <View style={ModeStyles.cardContent}>
                        <View style={{flexDirection: 'column', display: 'flex'}}>
                            <Image source={require('../../images/fantasia.png')} style={{height: 60, width: 60}} height={60} width={60} />
                        </View>
                        <View style={{flexDirection: 'column', display: 'flex'}}>
                            <Text style={{fontSize: 50, paddingLeft: 50}}>
                                Leyenda
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{paddingTop: 30, paddingBottom: 30}}>
                <TouchableOpacity onPress={() => navigation.navigate('ClassicMode')}>
                    <View style={ModeStyles.cardContent}>
                        <View style={{flexDirection: 'column', display: 'flex'}}>
                            <Image source={require('../../images/espada.png')} style={{height: 60, width: 60}} height={60} width={60} />
                        </View>
                        <View style={{flexDirection: 'column', display: 'flex'}}>
                            <Text style={{fontSize: 50, paddingLeft: 50}}>
                                Clásico
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{paddingTop: 30}}>
                <TouchableOpacity onPress={() => navigation.navigate('FasterMode')}>
                    <View style={ModeStyles.cardContent}>
                        <View style={{flexDirection: 'column', display: 'flex'}}>
                            <Image source={require('../../images/reloj.png')} style={{height: 60, width: 60}} height={60} width={60} />
                        </View>
                        <View style={{flexDirection: 'column', display: 'flex'}}>
                            <Text style={{fontSize: 50, paddingLeft: 50}}>
                                Rápido
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default React.memo(ModeView);
