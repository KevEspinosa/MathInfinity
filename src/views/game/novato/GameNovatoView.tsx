import * as React from 'react';
import { Button, Image, ImageBackground, Picker, Switch, Text, TouchableOpacity, View, Alert, Modal } from 'react-native';
import { Avatar, Header, Icon, Input, Overlay } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



import { GameNovatoStyles } from './GameNovatoStyles';
import { useState } from "react";
import { Value } from 'react-native-reanimated';


interface IData {
    question: string;
    result: number;
    answers: number[];
}

const GameNovato = ({ navigation }: any) => {
    const [answers, newAnswers] = React.useState<IData[]>([{ question: '', result: 0, answers: [] }]);
    const [currentAnswer, changeCurrentAnswer] = React.useState<number>(0);
    const [currentIncorrectAnswer, changeCurrentIncorrectAnswer] = React.useState<number>(0);
    const [phase, changePhase] = React.useState<number>(0);
    const [score, changeScore] = React.useState<number>(0);
    const [scoreColor, changeScoreColor] = React.useState<string>('black');
    const [isVisibleModal, changeVisibleModal] = React.useState(false);

    const [name, changeName] = React.useState('');

    const [timeSeconds, changeTimeSeconds] = React.useState<number>(360);
    const [colorTimer, changeColorTimer] = React.useState<string>('black');

    const timer = () => {
        const interval = setInterval(() => {
            changeTimeSeconds(prevState => {
                changeColorTimer(prevState < 61 ? 'red' : 'black');
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

    const onPressAnswer = (value: number) => {
        if (value === answers[currentAnswer].result) {
            changeScore(score + (5 * (phase + 1)));
            changeColorTimer('green')
            changeTimeSeconds(timeSeconds + 15);
        }
    }

    const onPressIncorrectAnswer = (value: number) => {
        if (value === answers[currentIncorrectAnswer].result) {
            changeScore(score - (3 * (phase + 1)));
            changeColorTimer('red')
            changeTimeSeconds(timeSeconds - 25);
        }
    }

    const mountedTime = React.useRef(true);

    React.useEffect(() => {
        mountedTime.current = true;
        if (mountedTime.current) {
            timer();
        }
        mountedTime.current = false;
    }, [])

    return (
        <View style={GameNovatoStyles.HomeContainer}>
            <TouchableOpacity
                style={GameNovatoStyles.headerContainer}
                onPress={() => navigation.navigate('Home')}>
                <Image source={require('../../../images/icons/arrow.png')} style={GameNovatoStyles.menuIcon} />
                <Text style={GameNovatoStyles.headerTitle}>Novato</Text>
            </TouchableOpacity>
            <View style={GameNovatoStyles.HomeContainer}>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text style={{ color: colorTimer, fontWeight: 'bold', fontSize: 50 }}>
                            {Math.floor(timeSeconds / 60) < 0 ? 0 : Math.floor(timeSeconds / 60)}: {timeSeconds - (Math.floor(timeSeconds / 60) * 60) < 10 ? `0${timeSeconds - (Math.floor(timeSeconds / 60) * 60)}` : timeSeconds - (Math.floor(timeSeconds / 60) * 60)}
                        </Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text>
                        Ejercicio
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', flex: 0.8, alignItems: 'flex-end' }}>
                    <View style={{ flexDirection: 'column', flex: 0.8, height: 150 }}>
                        <View style={GameNovatoStyles.OptionBotton}>
                            <TouchableOpacity onPress={() => onPressAnswer(currentAnswer)}>
                                <Text style={{ textAlign: 'center' }}>
                                    option 1
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={GameNovatoStyles.OptionBotton}>
                            <TouchableOpacity onPress={() => onPressIncorrectAnswer(currentIncorrectAnswer)}>
                                <Text style={{ textAlign: 'center' }}>
                                    option 2
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', flex: 0.8, height: 150 }}>
                        <View style={GameNovatoStyles.OptionBotton}>
                            <TouchableOpacity onPress={() => onPressIncorrectAnswer(currentAnswer)}>
                                <Text style={{ textAlign: 'center' }}>
                                    option 3
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={GameNovatoStyles.OptionBotton}>
                            <TouchableOpacity onPress={() => onPressIncorrectAnswer(currentAnswer)}>
                                <Text style={{ textAlign: 'center' }}>
                                    option 4
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default React.memo(GameNovato);
