import * as React from 'react';
import { Button, Image, ImageBackground, Picker, Switch, Text, TouchableOpacity, View, Alert, Modal } from 'react-native';
import { Avatar, Header, Icon } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



import { HomeStyles } from './HomeStyles';
import { useState } from "react";


const HomeView = ({ navigation }: any) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isEnabledSound, setIsEnabledSound] = useState(true);
    const [isEnabledVibration, setIsEnabledVibration] = useState(true);
    const toggleSwitchSound = () => setIsEnabledSound(previousState => !previousState);
    const toggleSwitchVibration = () => setIsEnabledVibration(previousState => !previousState);

    return (
        <View style={HomeStyles.HomeContainer}>
            <Header
                placement="center"
                containerStyle={{ marginTop: -20, width: '100%', height: 100, backgroundColor: '#75255D' }}
                leftComponent={{ icon: 'menu', color: '#fff', onPress: () => setModalVisible(true), size: 30 }}
                rightComponent={{icon: 'help', color: '#fff', onPress: () => navigation.navigate('Help'), size: 30}}
                centerComponent={{ text: 'MathInfinity', style: { color: '#fff', alignItems: 'center', fontSize: 20, fontWeight: 'bold', letterSpacing: 5 } }}
            />
            <View style={HomeStyles.content}>
                <View style={HomeStyles.Mod}>
                    <TouchableOpacity >
                        <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../images/espada.png')} style={{ height: 50, width: 50 }} height={50} width={50} />
                            <Text style={{ fontFamily: 'cursive', fontStyle: 'italic', fontSize: 26 }}>
                                Novato
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={HomeStyles.Mod}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../images/guerra.png')} style={{ height: 50, width: 50 }} height={50} width={50} />
                            <Text style={{ fontFamily: 'cursive', fontStyle: 'italic', fontSize: 26 }}>
                                Veterano
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={HomeStyles.Mod}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../images/pirata.png')} style={{ height: 50, width: 50 }} height={50} width={50} />
                            <Text style={{ fontFamily: 'cursive', fontStyle: 'italic', fontSize: 26 }}>
                                Maestro
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={HomeStyles.Mod}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../images/fantasia.png')} style={{ height: 50, width: 50 }} height={50} width={50} />
                            <Text style={{ fontFamily: 'cursive', fontStyle: 'italic', fontSize: 26 }}>
                                Leyenda
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>


            {modalVisible && (

                <View style={HomeStyles.modalContent}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <View style={HomeStyles.modalBackground} />
                    </TouchableOpacity>

                    <View style={HomeStyles.modalContainer}>
                        <View style={HomeStyles.menuContainer}>
                            <View style={HomeStyles.menuContent}>
                                <View style={HomeStyles.avatarContainer}>
                                    <Avatar
                                        size="xlarge"
                                        rounded={true}
                                        title="N"
                                        titleStyle={{ color: '#000', backgroundColor: '#CACACA', padding: 29 }}
                                        showAccessory={false}
                                        source={require('../../images/avatar.png')}
                                    />
                                    <Text style={{ fontWeight: 'bold' }}>
                                        guest1589
                                    </Text>
                                </View>

                                <View style={HomeStyles.selectContent}>
                                    <View style={{ flexDirection: 'column', display: 'flex' }}>
                                        <Image source={require('../../images/sound.png')} style={{ height: 30, width: 30 }} height={30} width={30} />
                                    </View>
                                    <Text style={{ fontSize: 13, borderColor: '#bbb', paddingLeft: 10, paddingRight: 48 }}>
                                        Sonido
                                    </Text>
                                    <Switch
                                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                                        thumbColor={isEnabledSound ? "#f5dd4b" : "#f4f3f4"}
                                        onValueChange={toggleSwitchSound}
                                        value={isEnabledSound}
                                    />
                                </View>
                                <View style={HomeStyles.selectContent}>
                                    <View style={{ flexDirection: 'column', display: 'flex' }}>
                                        <Image source={require('../../images/vibracion.png')} style={{ height: 30, width: 20 }} height={30} width={30} />
                                    </View>
                                    <Text style={{ fontSize: 13, borderColor: '#bbb', paddingLeft: 20, paddingRight: 33 }}>
                                        Vibración
                                    </Text>
                                    <Switch
                                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                                        thumbColor={isEnabledVibration ? "#f5dd4b" : "#f4f3f4"}
                                        onValueChange={toggleSwitchVibration}
                                        value={isEnabledVibration}
                                    />
                                </View>

                                <View style={HomeStyles.OptionMenu}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Puntuaciones')}>
                                        <View style={{ flexDirection: 'row', display: 'flex' }}>
                                            <Image source={require('../../images/primero.png')} style={{ height: 30, width: 30 }} height={30} width={30} />
                                            <Text style={{ paddingLeft: 10 }}>
                                                Puntuaciones
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={HomeStyles.footerContent}>
                            <TouchableOpacity onPress={() => navigation.navigate('Cerrar sesion')}>
                                <View>
                                    <Text style={{ color: '#ffffff', fontWeight: 'bold', letterSpacing: 1 }} >
                                        Cerrar Sesion
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View >
            )}
        </View >
    )
}

export default React.memo(HomeView);
