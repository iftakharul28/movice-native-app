import { Button, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Movice: { moviceId: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'About'>;
export default function HomeScreen({ navigation, route }: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style='auto' />
      <Text>About Screen</Text>
      <Button title='Go to Home' onPress={() => navigation.goBack()} />
    </View>
  );
}
