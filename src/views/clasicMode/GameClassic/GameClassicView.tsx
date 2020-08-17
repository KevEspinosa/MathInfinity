import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Header} from 'react-native-elements';

import {GameClassicStyle} from './GamelClassicStyles';

interface IData {
    question: string;
    result: number;
    answers: number[];
}

const GameClassicView = ({navigation}: any) => {
    const [answers, newAnswers] = React.useState<IData[]>([{question: '', result: 0, answers: []}]);
    const [currentAnswer, changeCurrentAnswer] = React.useState<number>(0);
    const [phase, changePhase] = React.useState<number>(0);
    const [score, changeScore] = React.useState<number>(0);
    const [scoreColor, changeScoreColor] = React.useState<string>('black');
    const responseFetch = () => {
        fetch(`http://192.168.100.8:3000/questions?phase=${phase}`)
            .then((response) => response.json())
            .then((json) => {
                if (phase > 0) {
                    newAnswers(answers.concat(json));
                } else {
                    newAnswers(json);
                }
            })
            .catch((error) => {
                console.error('error', error);
                throw error;
            });
    }
    const onPressAnswer = (value: number, index: number) => {
        if (value === answers[currentAnswer].result) {
            changeScore(score + (5 * (phase + 1)));
            changeScoreColor('green');
        } else {
            changeScore(score - (3 * (phase + 1)));
            changeScoreColor('red');
        }
        if (index === answers.length - 2) {
            changePhase(phase + 1);
        }
        changeCurrentAnswer(currentAnswer + 1);
    }
    React.useEffect(() => {
        responseFetch();
    }, [phase]);
    return (
        <View style={GameClassicStyle.ModeContainer}>
            <Header
                placement="center"
                containerStyle={{marginTop: -20, width: '100%', height: 100}}
                leftComponent={{icon: 'arrow-back', color: '#fff', onPress: () => navigation.navigate('ClassicMode'), size: 30}}
                centerComponent={{text: 'Clásico', style: { color: '#fff', alignItems: 'center', fontSize: 25}}}
            />
            <View style={GameClassicStyle.GameContainer}>
                <View>
                    <View style={{alignSelf: 'center', paddingBottom: 20, paddingTop: 30}}>
                        <Text style={{fontSize: 35}}>Puntaje</Text>
                    </View>
                    <View style={{alignSelf: 'center', paddingBottom: 10, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{flexDirection: 'column', fontSize: 50, fontWeight: 'bold'}}>{score}</Text>
                        {currentAnswer !== 0 && (
                            <Text style={{flexDirection: 'column', fontSize: 30, fontWeight: 'bold', color: scoreColor, paddingLeft: 20}}>
                                ({scoreColor === 'green' ? `+ ${5 * (phase + 1)}` : `- ${3 * (phase + 1)}`})
                            </Text>
                        )}
                    </View>
                </View>
                <View>
                    <View style={{alignSelf: 'center', paddingBottom: 20}}>
                        <Text style={{fontSize: 15}}>En el modo clásico, tu puntaje no se guardará</Text>
                    </View>
                </View>
                <View>
                    <View style={{alignSelf: 'center', paddingBottom: 40, paddingTop: 100}}>
                        <Text style={{fontSize: 35}}>¿Cuánto es?</Text>
                    </View>
                    <View style={{alignSelf: 'center', paddingBottom: 50}}>
                        <Text style={{fontSize: 50, fontWeight: 'bold'}}>{answers[currentAnswer].question}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', paddingLeft: 10, paddingRight: 10}}>
                    {answers[currentAnswer].answers.map((item, index) => {
                        return (
                            <View style={{flexDirection: 'column', backgroundColor: '#DFDFDF', borderRadius: 50, marginLeft: 50, marginBottom: 30, marginRight: 50}} key={index}>
                                <TouchableOpacity onPress={() => onPressAnswer(item, currentAnswer)}>
                                    <View style={{width: 100, height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{fontWeight: 'bold', fontSize: 30}}>{item}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                </View>
            </View>
        </View>
    );
}

export default React.memo(GameClassicView);
