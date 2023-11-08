import { StyleSheet, useColorScheme, SafeAreaView } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer, ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import AboutScreen from './screen/AboutScreen';
import MoviceScreen from './screen/MoviceScreen';
import Header from './components/Header';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Movice: { moviceId: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
              <Stack.Screen
                name='Home'
                options={({ navigation }) => ({
                  header: () => <Header navigation={navigation} />,
                })}
                component={HomeScreen}
              />
              <Stack.Screen
                name='Movice'
                options={({ navigation }) => ({
                  header: () => <Header navigation={navigation} />,
                })}
                component={MoviceScreen}
              />
              <Stack.Screen name='About' component={AboutScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
