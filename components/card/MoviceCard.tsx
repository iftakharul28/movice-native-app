import type { moviceCardType } from '../../model/movice';
import { View, Text, Pressable, Image } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Movice: { moviceId: string };
};
interface moviceCardProps extends moviceCardType {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}
export default function MoviceCard(props: moviceCardProps) {
  return (
    <Pressable
      style={{ backgroundColor: '#1a242f', marginTop: 10, borderRadius: 4, overflow: 'hidden' }}
      onPress={() =>
        props?.navigation.navigate('Movice', {
          moviceId: props.imdbID,
        })
      }>
      <Image
        style={{
          resizeMode: 'stretch',
          width: '100%',
          height: 280,
        }}
        source={{ uri: props.Poster }}
      />
      <View style={{ paddingVertical: 16, paddingHorizontal: 8 }}>
        <Text style={{ color: '#fff' }}>{props.Title}</Text>
        <Text style={{ color: '#fff' }}>{props.Year}</Text>
      </View>
    </Pressable>
  );
}
