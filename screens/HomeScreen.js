import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { MapPinIcon } from "react-native-heroicons/solid";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { themeColors } from "../theme";

export default function HomeScreen() {
  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />
      <Image
        source={require("../assets/images/beansBackground1.png")}
        className="w-full absolute -top-5 opacity-10"
        style={styles.image}
      />
      <SafeAreaView style={styles.container}>
        {/*Avatar and Bell Icon*/}
        <View className="px-8 flex-row justify-between items-center">
          <Image
            source={require("../assets/images/avatar.png")}
            className="h-9 w-9 rounded-full"
          />
          <View className="flex-row items-center space-x-2">
            <MapPinIcon size={25} color={themeColors.bgLight} />
            <Text className="text-base font-semibold">New York, NYC</Text>
          </View>
          <BellIcon size={27} color="black" />
        </View>

        {/*search bar*/}

        <View className="mx-5 mt-14">
          <View className="flex-row justify-center items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput
              placeholder="Search"
              className="p-4 flex-1 font-semibold text-gray-700"
            />
            <TouchableOpacity
              className="rounded-full p-2"
              style={{ backgroundColor: themeColors.bgLight }}
            >
              <MagnifyingGlassIcon size={25} strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/*categories*/}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 220,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
