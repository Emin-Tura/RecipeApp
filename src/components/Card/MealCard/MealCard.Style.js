import {Dimensions, StyleSheet} from 'react-native';

const screenSize = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    maxWidth: screenSize.width,
    height: screenSize.height / 4,
  },
  title: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
