import * as React from 'react';
import {Image, Picker, Switch, Text, TouchableOpacity, View} from 'react-native';
import {Avatar, Header, Icon} from 'react-native-elements';

import {HomeStyles} from './HomeStyles';
import {useState} from "react";

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
                backgroundColor="#fff"
                placement="center"
                containerStyle={{marginTop: -20, width: '100%', height: 100}}
                leftComponent={{ icon: 'menu', color: '#fff', onPress: () => setModalVisible(true), size: 30 }}
                centerComponent={{ text: 'MathInfinity', style: { color: '#000', alignItems: 'center', fontSize: 25 } }}
            />
            <View style={HomeStyles.content}>
                <View style={{paddingBottom: 30}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Mode')}>
                        <View style={HomeStyles.cardContent}>
                            <View style={{flexDirection: 'column', display: 'flex'}}>
                                <Image source={require('../../images/espadas.png')} style={{height: 60, width: 60}} height={60} width={60} />
                            </View>
                            <View style={{flexDirection: 'column', display: 'flex'}}>
                                <Text style={{fontSize: 50, paddingLeft: 50}}>
                                    Play
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{paddingTop: 30}}>
                    <TouchableOpacity onPress={() => null}>
                        <View style={HomeStyles.cardContent}>
                            <View style={{flexDirection: 'column', display: 'flex'}}>
                                <Image source={require('../../images/medalla.png')} style={{height: 60, width: 60}} height={60} width={60} />
                            </View>
                            <View style={{flexDirection: 'column', display: 'flex'}}>
                                <Text style={{fontSize: 50, paddingLeft: 50}}>
                                    Puntaje
                                </Text>
                            </View>
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
                            <View>
                                <View style={HomeStyles.avatarContainer}>
                                    <Avatar
                                        size="large"
                                        rounded={true}
                                        title="N"
                                        titleStyle={{color: '#000', backgroundColor: '#CACACA', padding: 29}}
                                        showAccessory={true}
                                    />
                                </View>
                                <View style={HomeStyles.menuContent}>
                                    <View style={HomeStyles.selectContent}>
                                        <Text style={HomeStyles.labelStyle}>
                                            Idioma
                                        </Text>
                                        <Picker
                                            selectedValue={selectedValueLanguage}
                                            style={{ height: 50, width: '100%' }}
                                            onValueChange={(itemValue) => setSelectedValueLanguage(itemValue)}
                                        >
                                            <Picker.Item label="Español" value="spanish" />
                                            <Picker.Item label="Inglés" value="english" />
                                        </Picker>
                                    </View>
                                    <View style={HomeStyles.selectContent}>
                                        <Text style={HomeStyles.labelStyle}>
                                            Tema
                                        </Text>
                                        <Picker
                                            selectedValue={selectedValueTheme}
                                            style={{ height: 50, width: '100%' }}
                                            onValueChange={(itemValue) => setSelectedValueTheme(itemValue)}
                                        >
                                            <Picker.Item label="Light" value="light" />
                                            <Picker.Item label="Dark" value="dark" />
                                        </Picker>
                                    </View>
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
                                </View>
                            </View>
                            <View style={HomeStyles.footerContent}>
                                <Text>Kevin Espinosa</Text>
                                <Text>JonathanMorillo</Text>
                                <Text>2020</Text>
                            </View>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
}

export default React.memo(HomeView);
