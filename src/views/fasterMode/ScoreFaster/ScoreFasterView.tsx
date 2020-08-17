import * as React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';

import {ScoreFasterStyles} from './ScoreFasterStyles';
import {Header} from "react-native-elements";
import {ScoreLegendStyles} from "../../legendMode/ScoreLegend/ScoreLegendStyle";

interface IScoreData {
    name: string;
    score: number
}

const ScoreFasterView = ({navigation}: any) => {
    const [scoreFasterData, setScoreFasterData] = React.useState([]);

    React.useEffect(() => {
        fetch('http://192.168.100.8:3000/scoreFaster')
            .then((response) => response.json())
            .then((json) => {
                setScoreFasterData(json);
            })
            .catch((error) => {
                console.error('error', error);
                throw error;
            });
    }, [])
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
                <ScrollView>
                    {scoreFasterData.sort((a: IScoreData, b: IScoreData) => b.score - a.score).map((score: IScoreData, index) => {
                        return (
                            <View style={{paddingBottom: 15}} key={index}>
                                <View style={ScoreLegendStyles.cardContent}>
                                    <View style={{flexDirection: 'column', display: 'flex', flex: 0.2}}>
                                        {index === 0 && (
                                            <Image source={require('../../../images/primero.png')} style={{height: 60, width: 60}} height={60} width={60} />
                                        )}
                                        {index === 1 && (
                                            <Image source={require('../../../images/segundo.png')} style={{height: 60, width: 60}} height={60} width={60} />
                                        )}
                                        {index === 2 && (
                                            <Image source={require('../../../images/tercer-lugar.png')} style={{height: 60, width: 60}} height={60} width={60} />
                                        )}
                                        {index > 2 && (
                                            <Image source={require('../../../images/medallaDefault.png')} style={{height: 60, width: 60}} height={60} width={60} />
                                        )}
                                    </View>
                                    <View style={{flexDirection: 'column', display: 'flex', flex: 1}}>
                                        <Text style={{fontSize: 30, paddingLeft: 50}}>
                                            {score.score}
                                        </Text>
                                    </View>
                                    <View style={{flexDirection: 'column', display: 'flex'}}>
                                        <Text style={{fontSize: 30, paddingLeft: 50}}>
                                            {score.name}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    );
}

export default React.memo(ScoreFasterView);
