import { useQuery } from '@tanstack/react-query';
import MoviceCard from '../card/MoviceCard';
import http from '../../lib/Http';
import type { moviceCardType } from '../../model/movice';
import { Text, View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Movice: { moviceId: string };
  //   About: { userId: string };
  //   Feed: { sort: 'latest' | 'top' } | undefined;
};
type Props = {
  title: string;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};
export default function HomeSerieSection(props: Props) {
  const {
    isPending,
    error,
    data: list,
  } = useQuery<{ Search: moviceCardType[] }>({
    queryKey: [`series_${props.title.replace(/\s/g, '_')}`],
    staleTime: 180,
    queryFn: async (query) => {
      // console.log(query.queryKey, 'fetching...');
      try {
        const response = await http.get({ path: `&s=${props.title}&type=series` });
        if (!response?.ok) {
          throw new Error('Network response was not ok');
        }
        return await response.json();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        return console.error(error?.message);
      }
    },
  });

  if (isPending) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>{'An error has occurred: ' + error}</Text>
      </View>
    );
  }
  return (
    <View style={{ marginTop: 8 }}>
      <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600' }}>{props.title}</Text>
      {list?.Search.map((movice) => (
        <MoviceCard key={movice.imdbID} {...movice} navigation={props.navigation} />
      ))}
    </View>
  );
}
