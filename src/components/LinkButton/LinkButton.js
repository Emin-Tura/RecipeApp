// import React, {memo, useCallback} from 'react';
// import {Alert, Linking, Text, TouchableOpacity} from 'react-native';
// import styles from './LinkButton.style';

// function LinkButton({href, title}) {
//   const handlePress = useCallback(async () => {
//     const supported = await Linking.canOpenURL(href);
//     if (supported) {
//       await Linking.openURL(href);
//     } else {
//       Alert.alert('URL is not supported');
//     }
//   }, [href]);

//   return (
//     <TouchableOpacity style={styles.button} onPress={handlePress} title={title}>
//       <Text style={styles.text}>{title}</Text>
//     </TouchableOpacity>
//   );
// }
// export default memo(LinkButton);
