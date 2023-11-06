import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { MapPinIcon } from "react-native-heroicons/solid";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Carousel from "react-native-snap-carousel";

import { themeColors } from "../theme";
import { categories, coffeeItems } from "../constants";
import { cn } from "../lib/utils";
import CoffeeCard from "../components/CoffeeCard";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState(1);

  // TODO: Refactor all sections into separate components

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
        <View className="px-5 mt-6">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id}
            className="overflow-visible"
            renderItem={({ item }) => {
              let isActive = item.id === activeCategory;
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item.id)}
                  style={{
                    backgroundColor: isActive
                      ? themeColors.bgLight
                      : "rgba(0,0,0,0.07)",
                  }}
                  className="p-4 px-5 mr-2 rounded-full shadow"
                >
                  <Text
                    className={cn(
                      "font-semibold",
                      isActive ? "text-white" : "text-gray-700",
                    )}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/*coffee cards*/}
        <View className="mt-16 py-2">
          <Carousel
            containerCustomStyle={{ overflow: "visible" }}
            data={coffeeItems}
            loop={true}
            renderItem={({ item }) => <CoffeeCard item={item} />}
            firstItem={1}
            inactiveSlideOpacity={0.75} // opacity of inactive slides
            inactiveSlideScale={0.77} // size of inactive slides
            sliderWidth={400} // slider width
            itemWidth={260} // card width
            slideStyle={{ display: "flex", alignItems: "center" }}
            windowSize={1}
          />
        </View>
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

/** To fix the warning of ViewPropTypes, use these guides:
 https://stackoverflow.com/questions/71702392/viewproptypes-will-be-removed-from-react-native-migrate-to-viewproptypes-export
 https://github.com/meliorence/react-native-snap-carousel/issues/923
 **/
