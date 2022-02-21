import {Dimensions, StyleSheet} from 'react-native';

const screenSize = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: screenSize.height / 3,
  },
  inner_container: {
    padding: 7,
  },
  title: {
    fontSize: 30,
    color: '#b71c1c',
    fontWeight: 'bold',
  },
  area: {
    fontSize: 23,
    color: '#b71c1c',
    fontWeight: '500',
  },
  instructions: {
    fontSize: 15,
    color: '#000',
    padding: 7,
  },
  divider: {
    marginVertical: 7,
    borderWidth: 1,
    borderColor: '#d3d3d3',
  },
  btn: {
    padding: 10,
    marginVertical: 20,
    backgroundColor: 'red',
    width: screenSize.width / 2.5,
    alignSelf: 'center',
    borderRadius: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});
