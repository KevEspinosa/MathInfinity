import * as React from 'react';
import {Image, Text, View} from 'react-native';

import {ScoreFasterStyles} from './ScoreFasterStyles';
import {Header} from "react-native-elements";

const ScoreFasterView = ({ navigation }) => {
    return (
        <View style={ScoreFasterStyles.ModeContainer}>
            <Header
                placement="center"
                containerStyle={{marginTop: -20, width: '100%', height: 100}}
                leftComponent={{icon: 'arrow-back', color: '#fff', onPress: () => navigation.navigate('Scores'), size: 30}}
                centerComponent={{text: 'Puntaje Rápido', style: { color: '#fff', alignItems: 'center', fontSize: 25}}}
            />
            <View style={ScoreFasterStyles.imageContent}>
                <Image source={require('../../../images/reloj.png')} style={{height: 120, width: 120}} height={60} width={60} />
            </View>
            <View style={ScoreFasterStyles.content}>
                <View style={{paddingBottom: 15}}>
                    <View style={ScoreFasterStyles.cardContent}>
                        <View style={{flexDirection: 'column', display: 'flex', flex: 0.2}}>
                            <Image source={require('../../../images/primero.png')} style={{height: 60, width: 60}} height={60} width={60} />
                        </View>
                        <View style={{flexDirection: 'column', display: 'flex', flex: 1}}>
                            <Text style={{fontSize: 30, paddingLeft: 50}}>
                                56
                            </Text>
                        </View>
                        <View style={{flexDirection: 'column', display: 'flex'}}>
                            <Text style={{fontSize: 30, paddingLeft: 50}}>
                                Nicolás
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{paddingTop: 15, paddingBottom: 15}}>
                    <View style={ScoreFasterStyles.cardContent}>
                        <View style={{flexDirection: 'column', display: 'flex', flex: 0.2}}>
                            <Image source={require('../../../images/segundo.png')} style={{height: 60, width: 60}} height={60} width={60} />
                        </View>
                        <View style={{flexDirection: 'column', display: 'flex', flex: 1}}>
                            <Text style={{fontSize: 30, paddingLeft: 50}}>
                                45
                            </Text>
                        </View>
                        <View style={{flexDirection: 'column', display: 'flex'}}>
                            <Text style={{fontSize: 30, paddingLeft: 50}}>
                                Jonathan
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{paddingTop: 15}}>
                    <View style={ScoreFasterStyles.cardContent}>
                        <View style={{flexDirection: 'column', display: 'flex', flex: 0.2}}>
                            <Image source={require('../../../images/tercer-lugar.png')} style={{height: 60, width: 60}} height={60} width={60} />
                        </View>
                        <View style={{flexDirection: 'column', display: 'flex', flex: 1}}>
                            <Text style={{fontSize: 30, paddingLeft: 50}}>
                                44
                            </Text>
                        </View>
                        <View style={{flexDirection: 'column', display: 'flex'}}>
                            <Text style={{fontSize: 30, paddingLeft: 50}}>
                                Kevin
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default React.memo(ScoreFasterView);
