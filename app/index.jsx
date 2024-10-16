import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className='bg-indigo-950 h-full'>
        <View className='my-80 border border-transparent bg-yellow rounded-full w-64 h-12 left-14 items-center justify-center'>
          <Link href='/home' className='text-2xl text-center font-pmedium'>click here to start</Link>
        </View>
      </View>
      
      
    </SafeAreaView>
  );
}








{/* <ScrollView contentContainerStyle={{height: '100%'}} className="bg-bg">
        <View className="w-full justify-center items-center h-full px-4">
          <Text className="relative font-psemibold text-3xl mb-[-50] top-0 left-0 text-white">PikriNtr</Text>
          <View className="relative mb-[230]">
            <Text className="text-3xl text-white font-pmedium text-center">Pihon</Text>
            <Link href="/home" className="text-yellow text-1xl text-center font-pregular">Click ini buat ke menu sebelah</Link>
          </View>
        </View>
      </ScrollView> */}