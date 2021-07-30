import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {ScoresStyles} from './ScoresStyles';
import {Header} from "react-native-elements";

const ScoresView = ({ navigation }:any) => {
    return (
        <View style={ScoresStyles.ModeContainer}>
            <Header
                placement="center"
                containerStyle={{marginTop: -20, width: '100%', height: 100}}
                leftComponent={{icon: 'arrow-back', color: '#fff', onPress: () => navigation.navigate('Home'), size: 30}}
                centerComponent={{text: 'Puntajes', style: { color: '#fff', alignItems: 'center', fontSize: 25}}}
            />
            <View style={ScoresStyles.content}>
                <View style={{paddingBottom: 30}}>
                    <TouchableOpacity onPress={() => navigation.navigate('ScoreLegend')}>
                        <View style={ScoresStyles.cardContent}>
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
                <View style={{paddingTop: 30}}>
                    <TouchableOpacity onPress={() => navigation.navigate('ScoreFaster')}>
                        <View style={ScoresStyles.cardContent}>
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
        </View>
    );
}

export default React.memo(ScoresView);
