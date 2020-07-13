import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {Header} from 'react-native-elements';

import {GameFasterStyle} from './GamelFasterStyles';
import {GameLegendStyle} from "../../legendMode/GameLegend/GamelLegendStyles";

const GameFasterView = ({ navigation }) => {
    return (
        <View style={GameFasterStyle.ModeContainer}>
            <Header
                placement="center"
                containerStyle={{marginTop: -20, width: '100%', height: 100}}
                leftComponent={{icon: 'arrow-back', color: '#fff', onPress: () => navigation.navigate('FasterMode'), size: 30}}
                centerComponent={{text: 'Rápido', style: { color: '#fff', alignItems: 'center', fontSize: 25}}}
            />
            <View style={GameFasterStyle.GameContainer}>
                <View style={GameLegendStyle.imageContent}>
                    <View style={{display: 'flex', flexDirection: 'column', paddingRight: 15}}>
                        <Image source={require('../../../images/reloj-de-arena.png')} style={{height: 70, width: 70}} height={70} width={70} />
                    </View>
                    <View style={{display: 'flex', flexDirection: 'column'}}>
                        <Text style={{color: '#6CDE1D', fontWeight: 'bold', fontSize: 50}}>
                            1:00
                        </Text>
                    </View>
                </View>
                <View>
                    <View style={{alignSelf: 'center', paddingBottom: 40}}>
                        <Text style={{fontSize: 35}}>¿Cuánto es?</Text>
                    </View>
                    <View style={{alignSelf: 'center', paddingBottom: 50}}>
                        <Text style={{fontSize: 50, fontWeight: 'bold'}}>10 - 5</Text>
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
                            <Text style={{fontWeight: 'bold', fontSize: 30}}>11</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'column', backgroundColor: '#DFDFDF', borderRadius: 50, marginRight: 30}}>
                        <View style={{padding: 30}}>
                            <Text style={{fontWeight: 'bold', fontSize: 30}}>15</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'column', backgroundColor: '#DFDFDF', borderRadius: 50}}>
                        <View style={{padding: 30}}>
                            <Text style={{fontWeight: 'bold', fontSize: 30}}>2</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default React.memo(GameFasterView);
