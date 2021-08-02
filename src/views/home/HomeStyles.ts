import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/resources';

export const HomeStyles = StyleSheet.create({
  HomeContainer: {
    height: '100%',
    width: '100%',
  },
  headerContainer: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.PRIMARY.BASE,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  menuIcon: {
    width: 20,
    height: 20,
    tintColor: Colors.WHITE.BASE,
    position: 'absolute',
    top: 15,
    left: 30,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  headerTitle: {
    color: Colors.WHITE.BASE,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 5,
  },
  settings: {
    alignContent: 'flex-start',
  },
  content: {
    padding: 40,
    alignContent: 'center',
  },
  Mod: {
    marginTop: 40,
    padding: 16,
    borderRadius: 60,
    textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: Colors.PRIMARY.BASE,
  },
  firstMod: {
    marginTop: 10,
    padding: 16,
    borderRadius: 60,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: Colors.PRIMARY.BASE,
  },
  firstModContent: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstModImage: {
    height: 50,
    width: 50,
  },
  firstModText: {
    fontFamily: 'cursive',
    fontStyle: 'italic',
    fontSize: 26,
    paddingLeft: 24,
  },
  modalContent: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  modalBackground: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 1000,
  },
  modalContainer: {
    height: '100%',
    width: 250,
    zIndex: 1010,
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  menuContainer: {
    padding: 15,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  avatarImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  menuContent: {
    paddingTop: 24,
  },
  selectContent: {
    paddingTop: 30,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 13,
    borderColor: '#bbb',
    paddingLeft: 10,
    paddingRight: 10,
  },
  OptionMenu: {
    paddingTop: 30,
    paddingBottom: 15,
    flexDirection: 'column',
  },
  footerContent: {
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 12,
    backgroundColor: '#E52B2B',
    height: 50,
  },
  avatarTitle: {
    color: '#000',
    backgroundColor: '#CACACA',
    padding: 29,
  },
  avatarText: {
    paddingTop: 4,
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectContentView: {
    flexDirection: 'column',
    display: 'flex',
  },
  imageIcon: {
    height: 30,
    width: 30,
  },
  imagenText: {
    fontSize: 13,
    borderColor: '#bbb',
    paddingLeft: 10,
    paddingRight: 48,
  },
  textLogout: {
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
