import * as React from 'react';
import { Button, Image, Picker, Switch, Text, TouchableOpacity, View } from 'react-native';
import { Avatar, Header, Icon } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



import { HomeStyles } from './HomeStyles';
import { useState } from "react";


const HomeView = ({ navigation }: any) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isEnabledSound, setIsEnabledSound] = useState(false);
    const [isEnabledVibration, setIsEnabledVibration] = useState(false);
    const Drawer = createDrawerNavigator();
    return (
        <View>
            <View style={HomeStyles.header}>
                <View style={{ flexDirection: 'column', display: 'flex' }}>
                    <Text style={HomeStyles.tittle}>
                        MathInfinity
                    </Text>
                </View>
            </View>

            <View style={HomeStyles.content}>
                <View style={HomeStyles.Mod}>
                    <TouchableOpacity >
                        <Text>
                            Novato
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={HomeStyles.Mod}>
                    <TouchableOpacity>
                        <Text>
                            Veterano
                        </Text>
                    </TouchableOpacity>
                </View><View style={HomeStyles.Mod}>
                    <TouchableOpacity>
                        <Text>
                            Maestro
                        </Text>
                    </TouchableOpacity>
                </View><View style={HomeStyles.Mod}>
                    <TouchableOpacity>
                        <Text>
                            Legendario
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}
  
export default React.memo(HomeView);
