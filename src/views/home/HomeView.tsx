import * as React from 'react';
import { Image, Picker, Switch, Text, TouchableOpacity, View } from 'react-native';
import { Avatar, Header, Icon } from 'react-native-elements';

import { HomeStyles } from './HomeStyles';
import { useState } from "react";

const HomeView = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValueLanguage, setSelectedValueLanguage] = useState("spanish");
    const [selectedValueTheme, setSelectedValueTheme] = useState("light");
    const [isEnabledSound, setIsEnabledSound] = useState(false);
    const [isEnabledVibration, setIsEnabledVibration] = useState(false);
    const toggleSwitchSound = () => setIsEnabledSound(previousState => !previousState);
    const toggleSwitchVibration = () => setIsEnabledVibration(previousState => !previousState);
    return (
        <View style={HomeStyles.HomeContainer}>
            <Header
                placement="center"
                containerStyle={{ marginTop: -20, width: '100%', height: 100 }}
                leftComponent={{ icon: 'menu', color: '#fff', onPress: () => setModalVisible(true), size: 30 }}
            />
            <View style={HomeStyles.content}>
                <View style={{ paddingBottom: 40 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Novato')}>
                        <View style={HomeStyles.cardContent}>
                            <View style={{ flexDirection: 'column', display: 'flex' }}>
                                <Image source={require('../../images/espadas.png')} style={{ height: 50, width: 50 }} height={60} width={60} />
                            </View>
                            <View style={{ flexDirection: 'column', display: 'flex' }}>
                                <Text style={{ fontSize: 30, paddingLeft: 50 }}>
                                    Novato
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingBottom: 40 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Veterano')}>
                        <View style={HomeStyles.cardContent}>
                            <View style={{ flexDirection: 'column', display: 'flex' }}>
                                <Image source={require('../../images/espadas.png')} style={{ height: 60, width: 60 }} height={60} width={60} />
                            </View>
                            <View style={{ flexDirection: 'column', display: 'flex' }}>
                                <Text style={{ fontSize: 30, paddingLeft: 50 }}>
                                    Veterano
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingBottom: 40 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Maestro')}>
                        <View style={HomeStyles.cardContent}>
                            <View style={{ flexDirection: 'column', display: 'flex' }}>
                                <Image source={require('../../images/espadas.png')} style={{ height: 60, width: 60 }} height={60} width={60} />
                            </View>
                            <View style={{ flexDirection: 'column', display: 'flex' }}>
                                <Text style={{ fontSize: 30, paddingLeft: 50 }}>
                                    Maestro
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingBottom: 40 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Leyenda')}>
                        <View style={HomeStyles.cardContent}>
                            <View style={{ flexDirection: 'column', display: 'flex' }}>
                                <Image source={require('../../images/espadas.png')} style={{ height: 60, width: 60 }} height={60} width={60} />
                            </View>
                            <View style={{ flexDirection: 'column', display: 'flex' }}>
                                <Text style={{ fontSize: 30, paddingLeft: 50 }}>
                                    Leyenda
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {modalVisible && (
                <View style={HomeStyles.modalContent}>

                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <View style={HomeStyles.close}>
                            <Text>X</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <View style={HomeStyles.modalBackground} />
                    </TouchableOpacity>

                    <View style={HomeStyles.modalContainer}>
                        <View style={HomeStyles.menuContainer}>
                            <View>
                                <View style={HomeStyles.avatarContainer}>
                                    <Avatar
                                        size="large"
                                        rounded={true}
                                        title="N"
                                        titleStyle={{ color: '#000', backgroundColor: '#CACACA', padding: 29 }}
                                        showAccessory={true}
                                    />
                                </View>
                                <View style={HomeStyles.menuContent}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Cerrar sesion')}>
                                        <View>
                                            <Text >
                                                Editar Perfil
                                            </Text>
                                        </View>
                                    </TouchableOpacity>

                                    <View style={HomeStyles.selectContent}>
                                        <Text style={HomeStyles.labelStyle}>
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
                                        <Text style={HomeStyles.labelStyle}>
                                            Vibración
                                        </Text>
                                        <Switch
                                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                                            thumbColor={isEnabledVibration ? "#f5dd4b" : "#f4f3f4"}
                                            onValueChange={toggleSwitchVibration}
                                            value={isEnabledVibration}
                                        />
                                    </View>

                                    <TouchableOpacity onPress={() => navigation.navigate('Puntuaciones')}>
                                        <View>
                                            <Text >
                                                Puntuaciones
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={HomeStyles.footerContent}>
                                <TouchableOpacity onPress={() => navigation.navigate('Cerrar sesion')}>
                                    <View>


                                        <Text >
                                            Cerrar Sesion
                                        </Text>

                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
}

export default React.memo(HomeView);
