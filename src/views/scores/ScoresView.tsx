import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Avatar, Button, Header } from 'react-native-elements';
import { IMAGES } from '../../images';

import { ScoreStyles } from '../scores/ScoresStyles';

const ClassicModeView = ({ navigation }: any) => {
    return (
        <View style={ScoreStyles.ScoreContainer}>
            <TouchableOpacity
                style={ScoreStyles.headerContainer}
                onPress={() => navigation.navigate('Home')}>
                <Image source={require('../../images/icons/arrow.png')} style={ScoreStyles.menuIcon} />
                <Text style={ScoreStyles.headerTitle}>Puntuaciones</Text>
            </TouchableOpacity>
            <View style={ScoreStyles.content}>
                <View style={ScoreStyles.Mod}>
                    <View style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <View style={ScoreStyles.avatarContainer}>
                                <Image
                                    source={require('../../images/icons/espada.png')}
                                    style={ScoreStyles.avatarImage}
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'cursive', fontStyle: 'italic', fontSize: 18 }}>
                            Novato
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ justifyContent: 'flex-start' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                    Posicion
                                </Text>
                            </View>
                            <View >
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                    Ejercicios Resueltos
                                </Text>
                            </View>

                        </View>
                        <View style={ScoreStyles.firstplace}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>
                                    # 1
                                </Text>
                                <Text>
                                    30
                                </Text>
                            </View>
                        </View>

                        <View style={ScoreStyles.secondplace}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>
                                    # 2
                                </Text>
                                <Text>
                                    26
                                </Text>
                            </View>
                        </View>

                        <View style={ScoreStyles.thirdplace}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>
                                    # 3
                                </Text>
                                <Text>
                                    20
                                </Text>
                            </View>
                        </View>

                        <View style={ScoreStyles.place}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>
                                    # 4
                                </Text>
                                <Text>
                                    8
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={ScoreStyles.Mod}>
                    <View style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <View style={ScoreStyles.avatarContainer}>
                                <Image
                                    source={require('../../images/icons/guerra.png')}
                                    style={ScoreStyles.avatarImage}
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'cursive', fontStyle: 'italic', fontSize: 18 }}>
                            Veterano
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ justifyContent: 'flex-start' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                    Posicion
                                </Text>
                            </View>
                            <View >
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                    Ejercicios Resueltos
                                </Text>
                            </View>

                        </View>
                        <View style={ScoreStyles.firstplace}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>
                                    # 1
                                </Text>
                                <Text>
                                    24
                                </Text>
                            </View>
                        </View>

                        <View style={ScoreStyles.secondplace}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>
                                    # 2
                                </Text>
                                <Text>
                                    20
                                </Text>
                            </View>
                        </View>

                        <View style={ScoreStyles.thirdplace}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>
                                    # 3
                                </Text>
                                <Text>
                                    12
                                </Text>
                            </View>
                        </View>

                        <View style={ScoreStyles.place}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>
                                    # 4
                                </Text>
                                <Text>
                                    8
                                </Text>
                            </View>
                        </View>
                    </View>


                </View>

                <View style={ScoreStyles.Mod}>
                    <View style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <View style={ScoreStyles.avatarContainer}>
                                <Image
                                    source={require('../../images/icons/pirata.png')}
                                    style={ScoreStyles.avatarImage}
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'cursive', fontStyle: 'italic', fontSize: 18 }}>
                            Maestro
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ justifyContent: 'flex-start' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                    Posicion
                                </Text>
                            </View>
                            <View >
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                    Ejercicios Resueltos
                                </Text>
                            </View>

                        </View>
                        <View style={ScoreStyles.firstplace}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>
                                    # 1
                                </Text>
                                <Text>
                                    13
                                </Text>
                            </View>
                        </View>

                        <View style={ScoreStyles.secondplace}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>
                                    # 2
                                </Text>
                                <Text>
                                    12
                                </Text>
                            </View>
                        </View>

                        <View style={ScoreStyles.thirdplace}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>
                                    # 3
                                </Text>
                                <Text>
                                    9
                                </Text>
                            </View>
                        </View>

                        <View style={ScoreStyles.place}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>
                                    # 4
                                </Text>
                                <Text>
                                    8
                                </Text>
                            </View>
                        </View>
                    </View>


                </View>

                <View style={ScoreStyles.Mod}>
                    <View style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <View style={ScoreStyles.avatarContainer}>
                                <Image
                                    source={require('../../images/icons/fantasia.png')}
                                    style={ScoreStyles.avatarImage}
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'cursive', fontStyle: 'italic', fontSize: 18 }}>
                            Leyenda
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ justifyContent: 'flex-start' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                    Posicion
                                </Text>
                            </View>
                            <View >
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                    Ejercicios Resueltos
                                </Text>
                            </View>

                        </View>
                        <View style={ScoreStyles.firstplace}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>
                                    # 1
                                </Text>
                                <Text>
                                    8
                                </Text>
                            </View>
                        </View>

                        <View style={ScoreStyles.secondplace}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>
                                    # 2
                                </Text>
                                <Text>
                                    6
                                </Text>
                            </View>
                        </View>

                        <View style={ScoreStyles.thirdplace}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>
                                    # 3
                                </Text>
                                <Text>
                                    5
                                </Text>
                            </View>
                        </View>

                        <View style={ScoreStyles.place}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>
                                    # 4
                                </Text>
                                <Text>
                                    8
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default React.memo(ClassicModeView);