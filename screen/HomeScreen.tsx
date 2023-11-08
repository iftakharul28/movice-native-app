import { ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import HomeMoviceSection from '../components/section/HomeMoviceSection';
type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Movice: { moviceId: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
export default function HomeScreen({ navigation }: Props) {
  const movies = ['John Wick', 'Mission Impossible', 'Harry Potter', 'James Bond'];
  const series = ['Friends', 'Loki'];
  return (
    <ScrollView style={{ paddingHorizontal: 8, paddingVertical: 16, backgroundColor: '#0f171e' }}>
      {movies.map((movice, index) => (
        <HomeMoviceSection key={index} title={movice} navigation={navigation} />
      ))}
      {series.map((serie, index) => (
        <HomeMoviceSection key={index} title={serie} navigation={navigation} />
      ))}
    </ScrollView>
  );
}
