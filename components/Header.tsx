import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, Pressable, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Movice: { moviceId: string };
  //   About: { userId: string };
  //   Feed: { sort: 'latest' | 'top' } | undefined;
};
type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};
export default function Header(props: Props) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: insets.top + 8,
        paddingBottom: insets.bottom + 8,
        paddingLeft: insets.left + 8,
        paddingRight: insets.right + 8,
        backgroundColor: '#1a242f',
      }}>
      <Pressable onPress={() => props.navigation.navigate('Home')}>
        <Text style={{ color: '#fff' }}>Header</Text>
      </Pressable>
      <Image
        style={{
          width: 30,
          height: 30,
          resizeMode: 'cover',
        }}
        source={require('../assets/user.png')}
      />
    </View>
  );
}
