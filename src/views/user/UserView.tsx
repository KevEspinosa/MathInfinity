import * as React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import { IMAGES } from '../../images';
import { UserStyle } from './UserStyles';

const UserView = ({ navigation }: any) => {
    return (
        <View style={UserStyle.ModeContainer}>
            <TouchableOpacity
                style={UserStyle.headerContainer}
                onPress={() => navigation.navigate('Home')}>

                <Image source={require('../../images/icons/arrow.png')} style={UserStyle.menuIcon} />
                <Text style={UserStyle.headerTitle}>Perfil</Text>
            </TouchableOpacity>

            <View style={{ alignItems: 'center', marginTop: 40, marginBottom: 40 }}>
                <TouchableOpacity>
                    <View style={UserStyle.avatarContainer}>
                        <Image
                            source={IMAGES.AVATAR}
                            style={UserStyle.avatarImage}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ backgroundColor: '#424949', borderRadius: 40, marginTop: 14 }}>
                        <Text style={{ padding: 10, }}>
                            Cambiar foto
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <View style={UserStyle.content}>
                    <Text style={UserStyle.text}>
                        Nombre de usuario
                    </Text>
                    <Text >
                        guest1589
                    </Text>
                </View>

                <View style={UserStyle.content}>
                    <Text style={UserStyle.text}>
                        Numero de ejercicios resueltos
                    </Text>
                    <Text>
                        30
                    </Text>
                </View>
                <View style={UserStyle.content}>
                    <Text style={UserStyle.text}>
                        Numero de ejercicios contestados correctamente
                    </Text>
                    <Text >
                        21
                    </Text>
                </View>
                <View style={UserStyle.content}>
                    <Text style={UserStyle.text}>
                        Numero de ejercicios contestados imcorrectamente
                    </Text>
                    <Text>
                        9
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default React.memo(UserView);