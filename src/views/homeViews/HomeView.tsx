import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Header} from 'react-native-elements';

import {HomeStyles} from '../../styles/homeStyles/HomeStyles';
import MenuView from './MenuView';
import HomeLabels from '../../labels/HomeLabels';

const HomeView = ({navigation}: {navigation: any}) => {

    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <View style={HomeStyles.HomeContainer}>
            <Header
                placement="center"
                containerStyle={HomeStyles.containerHome}
                leftComponent={{ icon: 'menu', color: '#fff', onPress: () => setModalVisible(true), size: 30 }}
                centerComponent={{ text: 'MathInfinity', style:HomeStyles.centerContainer}}
            />
            <View style={HomeStyles.content}>
                <View style={{paddingBottom: 30}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Mode')}>
                        <View style={HomeStyles.cardContent}>
                            <View style={HomeStyles.cardContentimage}>
                                <Image source={require('../../images/espadas.png')} style={HomeStyles.cardImage} height={60} width={60} />
                            </View>
                            <View style={HomeStyles.cardContentimage}>
                                <Text style={HomeStyles.cardContentext}>
                                    {HomeLabels.GAME_TEXT}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{paddingTop: 30}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Scores')}>
                        <View style={HomeStyles.cardContent}>
                            <View style={HomeStyles.cardContentimage}>
                                <Image source={require('../../images/medalla.png')} style={HomeStyles.cardImage} height={60} width={60} />
                            </View>
                            <View style={HomeStyles.cardContentimage}>
                                <Text style={HomeStyles.cardContentext}>
                                    {HomeLabels.SCORE_TEXT}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {modalVisible && (<MenuView changeModalVisible={setModalVisible} />)}
        </View>
    );
}

export default React.memo(HomeView);
