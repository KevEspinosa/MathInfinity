import * as React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Avatar, Button, Header } from 'react-native-elements';
import { IMAGES } from '../../images';

import { HelpStyles } from '../help/HelpStyles';

const ClassicModeView = ({ navigation }: any) => {
    return (
        <View style={HelpStyles.HelpContainer}>
            <TouchableOpacity
                style={HelpStyles.headerContainer}
                onPress={() => navigation.navigate('Home')}>
                <Image source={require('../../images/icons/arrow.png')} style={HelpStyles.menuIcon} />
                <Text style={HelpStyles.headerTitle}>Ayuda</Text>
            </TouchableOpacity>
            <View style={HelpStyles.content}>
                <View style={HelpStyles.firstMod}>
                    <View style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <View style={HelpStyles.avatarContainer}>
                                <Image
                                    source={require('../../images/icons/espada.png')}
                                    style={HelpStyles.avatarImage}
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'cursive', fontStyle: 'italic', fontSize: 17 }}>
                            Novato
                        </Text>
                    </View>
                    <View>
                        <Text>
                            Ejercicios de Operaciones con numeros reales
                        </Text>
                        <Text>
                            Comienzas con 6 minutos
                        </Text>
                        <Text>
                            Respuesta equivocada resta 25 segundos
                        </Text>
                        <Text>
                            Respuesta correcta suma 15 segundos
                        </Text>
                    </View>
                </View>
                <View style={HelpStyles.Mod}>
                    <View style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <View style={HelpStyles.avatarContainer}>
                                <Image
                                    source={require('../../images/icons/guerra.png')}
                                    style={HelpStyles.avatarImage}
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'cursive', fontStyle: 'italic', fontSize: 17 }}>
                            Veterano
                        </Text>
                    </View>
                    <View>
                        <Text>
                            Ejercicios de Ecuaciones de la recta
                        </Text>

                        <Text>
                            Comienzas con 4 minutos
                        </Text>
                        <Text>
                            Respuesta equivocada resta 10 segundos
                        </Text>
                        <Text>
                            Respuesta correcta suma 6 segundos
                        </Text>
                    </View>
                </View>
                <View style={HelpStyles.Mod}>
                    <View style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <View style={HelpStyles.avatarContainer}>
                                <Image
                                    source={require('../../images/icons/pirata.png')}
                                    style={HelpStyles.avatarImage}
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'cursive', fontStyle: 'italic', fontSize: 17 }}>
                            Maestro
                        </Text>
                    </View>
                    <View>
                        <Text>
                            Ejercicios de Factorizacion de Polinomios
                        </Text>

                        <Text>
                            Comienzas con 2 minutos
                        </Text>
                        <Text>
                            Respuesta equivocada resta 6 segundos
                        </Text>
                        <Text>
                            Respuesta correcta suma 4 segundos
                        </Text>
                    </View>
                </View>
                <View style={HelpStyles.Mod}>
                    <View style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <View style={HelpStyles.avatarContainer}>
                                <Image
                                    source={require('../../images/icons/fantasia.png')}
                                    style={HelpStyles.avatarImage}
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={{ fontFamily: 'cursive', fontStyle: 'italic', fontSize: 17 }}>
                            Leyenda
                        </Text>
                    </View>
                    <View>
                        <Text>
                            Ejercicios de Conversiones de unidades del sistema Internacional (SI)
                        </Text>

                        <Text>
                            Comienzas con 1 minutos
                        </Text>
                        <Text>
                            Respuesta equivocada resta 5 segundos
                        </Text>
                        <Text>
                            Respuesta correcta suma 3 segundos
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default React.memo(ClassicModeView);