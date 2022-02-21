import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    flex: 1,
    margin: 10,
    flexDirection: 'row',
    padding: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'contain',
    marginLeft: 5,
  },
  cardText: {
    fontSize: 25,
    alignSelf: 'center',
    marginLeft: 10,
    color: '#000',
  },
});
