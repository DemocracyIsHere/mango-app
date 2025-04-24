import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileSetup() {
  return (
    <SafeAreaView className="flex-1 bg-peach-50">
      <ScrollView className="p-4">
        <View className="items-center mb-6">
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            className="w-24 h-24 rounded-full"
          />
          <Text className="text-xl font-semibold text-rose-600 mt-2">PassionConnect - Mango</Text>
        </View>
        <View className="mb-4">
          <Text className="text-base font-medium">Name</Text>
          <TextInput placeholder="Cathy" className="border p-2 rounded bg-white" />
        </View>
        <View className="mb-4 flex-row justify-between">
          <View className="w-[48%]">
            <Text className="text-base font-medium">Age</Text>
            <TextInput placeholder="30" className="border p-2 rounded bg-white" keyboardType="numeric" />
          </View>
          <View className="w-[48%]">
            <Text className="text-base font-medium">Gender</Text>
            <TextInput placeholder="Female" className="border p-2 rounded bg-white" />
          </View>
        </View>
        <View className="mb-4">
          <Text className="text-base font-medium">Orientation</Text>
          <TextInput placeholder="Straight" className="border p-2 rounded bg-white" />
        </View>
        <View className="mb-4">
          <Text className="text-base font-medium">Mood Selection</Text>
          <View className="flex-row flex-wrap gap-2 mt-2">
            <Text className="px-3 py-1 bg-yellow-200 rounded-full">Coffee Date</Text>
            <Text className="px-3 py-1 bg-indigo-200 rounded-full">In a Mood for Movie</Text>
            <Text className="px-3 py-1 bg-rose-200 rounded-full">One Night Stand</Text>
          </View>
        </View>
        <View className="mb-4">
          <Text className="text-base font-medium">Expression of Interest</Text>
          <TextInput
            placeholder="Hi, I’m in the mood to go to a..."
            className="border p-2 rounded bg-white"
            multiline
          />
        </View>
        <View className="mb-4">
          <Text className="text-base font-medium">Consent Preferences</Text>
          <Text className="mt-1">✅ No Touch</Text>
          <Text>✅ No Consent-based physical interaction</Text>
          <Text>✅ Only verbal interaction</Text>
        </View>
        <View className="mb-4">
          <Text className="text-base font-medium">Talents / Skills</Text>
          <Text className="mt-1">🎤 Can sing</Text>
          <Text>🧘 Yoga</Text>
          <Text>✈️ Travel</Text>
        </View>
        <View className="mb-10">
          <Text className="text-base font-medium">Responsible Citizen Rating</Text>
          <Text className="mt-1">😊 Level 0</Text>
        </View>
        <TouchableOpacity className="bg-rose-500 p-4 rounded-xl items-center">
          <Text className="text-white font-semibold">Save Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
