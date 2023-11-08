import { ScrollView, View, Dimensions, Image, Text } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useQuery } from '@tanstack/react-query';
import type { moviceDetailsType } from '../model/movice';
import http from '../lib/Http';

type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Movice: { moviceId: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Movice'>;
export default function HomeScreen({ navigation, route }: Props) {
  const { height } = Dimensions.get('window');
  const { isPending, error, data } = useQuery<moviceDetailsType>({
    queryKey: ['movice_details', route?.params.moviceId],
    staleTime: 180,
    queryFn: async (query) => {
      try {
        console.log(route?.params.moviceId, query.queryKey, 'fetching...');
        const response = await http.get({ path: `&i=${route?.params.moviceId}&Plot=full` });
        if (!response?.ok) {
          throw new Error('Network response was not ok');
        }
        return await response.json();
        // eslint-disable-next-line
      } catch (error: any) {
        return console.error(error?.message);
      }
    }, // The query will not execute until the userId exists
    enabled: !!route?.params.moviceId,
  });

  if (isPending) {
    return (
      <View style={{ height, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ height, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{'An error has occurred: ' + error}</Text>
      </View>
    );
  }
  return (
    <ScrollView style={{ paddingHorizontal: 8, paddingVertical: 16, backgroundColor: '#0f171e' }}>
      <Image
        style={{
          resizeMode: 'cover',
          width: '100%',
          height: 350,
        }}
        source={{ uri: data.Poster }}
      />
      <Text style={{ color: '#fff', fontSize: 22, fontWeight: '600' }}>{data.Title}</Text>
      <Text style={{ display: 'flex', flexWrap: 'wrap', gap: 6, width: '100%' }}>
        <Text style={{ color: '#fff' }}>IMDB Rating : {data?.imdbRating}</Text>
        <Text style={{ color: '#fff' }}>IMDB Votes : {data?.imdbVotes}</Text>
        <Text style={{ color: '#fff' }}>Runtime : {data?.Runtime}</Text>
        <Text style={{ color: '#fff' }}>Year : {data?.Year}</Text>
      </Text>
      <Text style={{ color: '#fff' }}>{data?.Plot}</Text>
      <View style={{ marginTop: 36 }}>
        <View>
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>Director</Text>
          <Text style={{ color: '#fff' }}>{data?.Director}</Text>
        </View>
        <View style={{ marginTop: 12 }}>
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>Stars</Text>
          <Text style={{ color: '#fff' }}>{data?.Actors}</Text>
        </View>
        <View style={{ marginTop: 12 }}>
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>Generes</Text>
          <Text style={{ color: '#fff' }}>{data?.Genre}</Text>
        </View>
        <View style={{ marginTop: 12 }}>
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>Languages</Text>
          <Text style={{ color: '#fff' }}>{data?.Language}</Text>
        </View>
        <View style={{ marginTop: 12 }}>
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>Awards</Text>
          <Text style={{ color: '#fff' }}>{data?.Awards}</Text>
        </View>
      </View>
      {/* <StatusBar style='auto' />
      <Text>Movice Screen</Text>
      <Text style={{ marginLeft: 20 }}>{JSON.stringify(data)}</Text>
      <Button title='Go to Home' onPress={() => navigation.goBack()} /> */}
    </ScrollView>
  );
}
