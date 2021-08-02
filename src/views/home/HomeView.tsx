import * as React from 'react';
import {Image, Switch, Text, TouchableOpacity, View} from 'react-native';

import {HomeStyles} from './HomeStyles';
import {getData, storeData} from '../../utils/persistData';
import {ICONS, IMAGES} from '../../images';
import {URL_API} from '../../constants/config';

const HomeView = ({navigation}: any) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [isEnabledSound, setIsEnabledSound] = React.useState(true);
  const [isEnabledVibration, setIsEnabledVibration] = React.useState(true);
  const [userId, changeUserId] = React.useState('');

  React.useEffect(() => {
    const getTokenAction = async () => {
      const getToken: any = await getData('token');
      if (getToken !== null) {
        changeUserId(getToken);
      } else {
        changeUserId('');
      }
    };
    getTokenAction();
    fetch(`${URL_API}/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(e => new Error(e));
  }, []);

  const toggleSwitchSound = () =>
    setIsEnabledSound(previousState => !previousState);
  const toggleSwitchVibration = () =>
    setIsEnabledVibration(previousState => !previousState);

  const Logout = () => {
    storeData('token', '');
  };

  return (
    <View style={HomeStyles.HomeContainer}>
      <TouchableOpacity
        style={HomeStyles.headerContainer}
        onPress={() => setModalVisible(true)}>
        <Image source={ICONS.MENU} style={HomeStyles.menuIcon} />
        <Text style={HomeStyles.headerTitle}>MathInfinity</Text>
      </TouchableOpacity>
      <View style={HomeStyles.content}>
        <View style={HomeStyles.firstMod}>
          <TouchableOpacity
            onPress={() => navigation.navigate('GameNovato')}
            style={HomeStyles.firstModContent}>
            <Image
              source={require('../../images/icons/espada.png')}
              style={HomeStyles.firstModImage}
              height={50}
              width={50}
            />
            <Text style={HomeStyles.firstModText}>Novato</Text>
          </TouchableOpacity>
        </View>
        <View style={HomeStyles.Mod}>
          <TouchableOpacity onPress={() => navigation.navigate('GameVeterano')}>
            <View style={HomeStyles.firstModContent}>
              <Image
                source={require('../../images/icons/guerra.png')}
                style={HomeStyles.firstModImage}
                height={50}
                width={50}
              />
              <Text style={HomeStyles.firstModText}>Veterano</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={HomeStyles.Mod}>
          <TouchableOpacity onPress={() => navigation.navigate('GameMaestro')}>
            <View style={HomeStyles.firstModContent}>
              <Image
                source={require('../../images/icons/pirata.png')}
                style={HomeStyles.firstModImage}
                height={50}
                width={50}
              />
              <Text style={HomeStyles.firstModText}>Maestro</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={HomeStyles.Mod}>
          <TouchableOpacity onPress={() => navigation.navigate('GameLeyenda')}>
            <View style={HomeStyles.firstModContent}>
              <Image
                source={require('../../images/icons/fantasia.png')}
                style={HomeStyles.firstModImage}
                height={50}
                width={50}
              />
              <Text style={HomeStyles.firstModText}>Leyenda</Text>
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
                  <TouchableOpacity onPress={() => navigation.navigate('User')}>
                    <View style={HomeStyles.avatarContainer}>
                      <Image
                        source={IMAGES.AVATAR}
                        style={HomeStyles.avatarImage}
                      />
                    </View>
                    <Text style={HomeStyles.avatarText}>guest1589</Text>
                  </TouchableOpacity>
                </View>

                <View style={HomeStyles.selectContent}>
                  <View style={HomeStyles.selectContentView}>
                    <Image
                      source={require('../../images/icons/sound.png')}
                      style={HomeStyles.imageIcon}
                      height={30}
                      width={30}
                    />
                  </View>
                  <Text style={HomeStyles.imagenText}>Sonido</Text>
                  <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabledSound ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleSwitchSound}
                    value={isEnabledSound}
                  />
                </View>
                <View style={HomeStyles.selectContent}>
                  <View style={HomeStyles.selectContentView}>
                    <Image
                      source={require('../../images/icons/vibracion.png')}
                      style={HomeStyles.imageIcon}
                      height={30}
                      width={30}
                    />
                  </View>
                  <Text style={HomeStyles.imagenText}>Vibración</Text>
                  <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabledVibration ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleSwitchVibration}
                    value={isEnabledVibration}
                  />
                </View>

                <View style={HomeStyles.OptionMenu}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Score')}>
                    <View style={HomeStyles.selectContentView}>
                      <Image
                        source={require('../../images/icons/primero.png')}
                        style={HomeStyles.imageIcon}
                        height={30}
                        width={30}
                      />
                      <Text style={{paddingLeft: 10}}>Puntuaciones</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={HomeStyles.OptionMenu}>
                  <TouchableOpacity onPress={() => navigation.navigate('Help')}>
                    <View style={HomeStyles.selectContentView}>
                      <Image
                        source={require('../../images/icons/ayuda.png')}
                        style={HomeStyles.imageIcon}
                        height={30}
                        width={30}
                      />
                      <Text style={{paddingLeft: 10}}>Ayuda</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={HomeStyles.footerContent}>
              <TouchableOpacity onPress={Logout}>
                <View>
                  <Text style={HomeStyles.textLogout}>Cerrar Sesion</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default React.memo(HomeView);
