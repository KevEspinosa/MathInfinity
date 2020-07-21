import * as React from 'react';
import {Button, Picker, Switch, Text, TouchableOpacity, View} from "react-native";
import {Avatar} from "react-native-elements";

import {MenuStyles} from '../../styles/homeStyles/MenuStyles';
import {useState} from "react";

interface IMenuProps {
    changeModalVisible: (isVisibleModal: boolean) => void;
}

const MenuView = (props: IMenuProps) => {
    const {changeModalVisible} = props;

    const [selectedValueLanguage, setSelectedValueLanguage] = useState("spanish");
    const [selectedValueTheme, setSelectedValueTheme] = useState("light");
    const [isEnabledSound, setIsEnabledSound] = useState(false);
    const [isEnabledVibration, setIsEnabledVibration] = useState(false);
    const toggleSwitchSound = () => setIsEnabledSound(previousState => !previousState);
    const toggleSwitchVibration = () => setIsEnabledVibration(previousState => !previousState);

    return (
        <View style={MenuStyles.modalContent}>
            <TouchableOpacity onPress={() => changeModalVisible(false)}>
                <View style={MenuStyles.modalBackground} />
            </TouchableOpacity>
            <View style={MenuStyles.modalContainer}>
                <View style={MenuStyles.menuContainer}>
                    <View>
                        <View style={MenuStyles.avatarContainer}>
                            <Avatar
                                size="large"
                                rounded={true}
                                title="N"
                                titleStyle={{color: '#000', backgroundColor: '#CACACA', padding: 29}}
                                showAccessory={true}
                            />
                        </View>
                        <View style={MenuStyles.menuContent}>
                            <View style={MenuStyles.selectContent}>
                                <Text style={MenuStyles.labelStyle}>
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
                            <View style={MenuStyles.selectContent}>
                                <Text style={MenuStyles.labelStyle}>
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
                            <View style={MenuStyles.selectContent}>
                                <Text style={MenuStyles.labelStyle}>
                                    Sonido
                                </Text>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={isEnabledSound ? "#f5dd4b" : "#f4f3f4"}
                                    onValueChange={toggleSwitchSound}
                                    value={isEnabledSound}
                                />
                            </View>
                            <View style={MenuStyles.selectContent}>
                                <Text style={MenuStyles.labelStyle}>
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
                    <View style={MenuStyles.footerContent}>
                        <Button title="Sign out" onPress={() => null} />
                        <Text>Kevin Espinosa</Text>
                        <Text>JonathanMorillo</Text>
                        <Text>2020</Text>
                    </View>
                </View>
            </View>
        </View>
    )
};

export default React.memo(MenuView);
