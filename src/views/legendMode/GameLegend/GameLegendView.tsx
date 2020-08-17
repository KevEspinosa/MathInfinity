import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Button, Header, Input, Overlay} from 'react-native-elements';

import {GameLegendStyle} from './GamelLegendStyles';

interface IData {
    question: string;
    result: number;
    answers: number[];
}

const GameLegendView = ({navigation}: any) => {
    const [answers, newAnswers] = React.useState<IData[]>([{question: '', result: 0, answers: []}]);
    const [currentAnswer, changeCurrentAnswer] = React.useState<number>(0);
    const [phase, changePhase] = React.useState<number>(0);
    const [score, changeScore] = React.useState<number>(0);
    const [scoreColor, changeScoreColor] = React.useState<string>('black');
    const [isVisibleModal, changeVisibleModal] = React.useState(false);

    const [name, changeName] = React.useState('');

    const [timeSeconds, changeTimeSeconds] = React.useState<number>(300);
    const [colorTimer, changeColorTimer] = React.useState<string>('#6CDE1D');

    const timer = () => {
        const interval = setInterval(() => {
            changeTimeSeconds(prevState => {
                changeColorTimer(prevState < 61 ? 'red' : '#6CDE1D');
                if (prevState < 2) {
                    clearInterval(interval);
                }
                if (prevState <= 1) {
                    changeVisibleModal(true);
                }
                return prevState - 1;
            });
        }, 1000);
    }

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

    const mountedTime = React.useRef(true);
    React.useEffect(() => {
        mountedTime.current = true;
        if (mountedTime.current) {
            timer();
        }
        mountedTime.current = false;
    }, [])

    const newScore = () => {
        navigation.navigate('LegendMode');
        fetch(`http://192.168.100.8:3000/scoreLegend?name=${name}&score=${score}`, {
            method: 'POST'
        })
            .then((response) => response.json())
            .catch((error) => {
                console.error('error', error);
                throw error;
            });
    }

    React.useEffect(() => {
        responseFetch();
    }, [phase]);

    return (
        <View style={GameLegendStyle.ModeContainer}>
            <Header
                placement="center"
                containerStyle={{marginTop: -20, width: '100%', height: 100}}
                leftComponent={{icon: 'arrow-back', color: '#fff', onPress: () => navigation.navigate('LegendMode'), size: 30}}
                centerComponent={{text: 'Leyenda', style: { color: '#fff', alignItems: 'center', fontSize: 25}}}
            />
            <Overlay isVisible={isVisibleModal}>
                <View style={{padding: 50, alignItems: "center"}}>
                    <Text style={{fontSize: 25, paddingBottom: 15}}>¡Oh no!</Text>
                    <Text style={{fontSize: 25, paddingBottom: 15}}>Se acabo el tiempo</Text>
                    <View style={{paddingBottom: 15, width: 200}}>
                        <Input
                            placeholder='Nombre'
                            onChangeText={text => changeName(text)}
                        />
                    </View>
                    <View style={{paddingBottom: 15}}>
                        <Button
                            title="Guardar Puntaje"
                            titleStyle={{fontSize: 25, padding: 10}}
                            onPress={() => newScore()}
                        />
                    </View>
                    <Button
                        title="Regresar"
                        titleStyle={{fontSize: 25, padding: 10}}
                        onPress={() => navigation.navigate('LegendMode')}
                        buttonStyle={{backgroundColor: 'brown'}}
                    />
                </View>
            </Overlay>
            <View style={GameLegendStyle.GameContainer}>
                <View>
                    <View style={GameLegendStyle.imageContent}>
                        <View style={{display: 'flex', flexDirection: 'column', paddingRight: 15}}>
                            <Image source={require('../../../images/reloj-de-arena.png')} style={{height: 70, width: 70}} height={70} width={70} />
                        </View>
                        <View style={{display: 'flex', flexDirection: 'column'}}>
                            <Text style={{color: colorTimer, fontWeight: 'bold', fontSize: 50}}>
                                {Math.floor(timeSeconds / 60)}: {timeSeconds - (Math.floor(timeSeconds / 60) * 60) < 10 ? `0${timeSeconds - (Math.floor(timeSeconds / 60) * 60)}` : timeSeconds - (Math.floor(timeSeconds / 60) * 60)}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <View style={{alignSelf: 'center', paddingBottom: 20, paddingTop: 20}}>
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
                </View>
                <View>
                    <View style={{alignSelf: 'center', paddingBottom: 40}}>
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

export default React.memo(GameLegendView);
