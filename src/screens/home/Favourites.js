import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Modal
} from "react-native";
import React, { useState } from "react";
import Container from "../../components/Container";
import CustomFooter from "../../components/CustomFooter";
import { COLORS } from "../../constants/COLORS";
import Header from "../../components/home/Header";
import CustomInput from "../../components/CustomInput";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { ARTISANS } from "../../constants/ARTISANS";
import CustomSideMenu from "../../components/CustomSideMenu";
import { useNavigation } from "@react-navigation/native";

const Favourites = () => {
  const [windowHeight, setWindowHeight] = useState(
    Dimensions.get("screen").height
  );
  const [windowWidth, setWindowWidth] = useState(
    Dimensions.get("screen").width
  );
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "All",
      isActive: true,
    },
    {
      id: 2,
      name: "Barbers",
      isActive: false,
    },
    {
      id: 3,
      name: "Fashion Designer",
      isActive: false,
    },
    {
      id: 4,
      name: "Hair Dresser",
      isActive: false,
    },
    {
      id: 5,
      name: "Make-up Artiste",
      isActive: false,
    },
  ]);
  const [showSideBar, setShowSideBar] = useState(false);
  const navigation = useNavigation();
  function getBackgroundColor(item) {
    if (item.isActive) {
      return COLORS.purple;
    }
  }

  function renderTalentsList({ item }) {
    return (
      <TouchableHighlight underlayColor={COLORS.lightPurple} onPress={() => {
        navigation.navigate("artisan-detail")
      }} style={styles.artisansContainer}>
        <View style={[styles.aritisansList]}>
          <View style={{
            width: windowWidth /3.5,
          }}>
            <Image source={item.profilePic} />
          </View>
         <View style={{
          flexDirection: 'column',
          flex: 1,
         }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: Platform.OS ==='android' ? 9 : 4,
          }}>
            <View>
            <View style={{
              flexDirection: 'row'
            }}>
              <AntDesign name="star" size={14} color={COLORS.yellow} />
              <AntDesign name="star" size={14} color={COLORS.yellow} />
              <AntDesign name="star" size={14} color={COLORS.yellow} />
              <AntDesign name="staro" size={14} color={COLORS.yellow} />
              <AntDesign name="staro" size={14} color={COLORS.yellow} />
            </View>
            <Text style={styles.artisanTittle}>{item.name}</Text>
            </View>
            <View>
            <AntDesign name="hearto" size={24} color={COLORS.purple} />
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10
          }}>
            <Text style={{
              fontSize: 10,
              width: 100
            }}>deliver the best fashion service and styles...</Text>
            <Text style={{
              color: COLORS.purple,
              fontSize: 14,
              fontWeight: '500'
            }}>{item.pricing}</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            paddingHorizontal: 5,
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Entypo name="location-pin" size={18} color={COLORS.lightPurple} />
          <Text style={{
            color: COLORS.purple
          }}>500m Away</Text>
          </View>
         </View>
        </View>
      </TouchableHighlight>
    );
  }
  function renderCategories({ item }) {
    return (
      <TouchableHighlight
        style={[styles.category, { backgroundColor: getBackgroundColor(item) }]}
      >
        <Text
          style={[
            styles.categoryText,
            { color: item.isActive ? COLORS.white : COLORS.purple },
          ]}
        >
          {item.name}
        </Text>
      </TouchableHighlight>
    );
  }
  function toggleSideBar() {
    setShowSideBar((prev) => !prev);
  }
  return (
    <Container>
      {showSideBar && (
        <Modal presentationStyle="overFullScreen" transparent={true} onRequestClose={() => {
          setShowSideBar(false)
        }} animationType="fade">

        
        <View
          style={{
            position: "absolute",
            backgroundColor: COLORS.purple,
            width: 204,
            height: windowHeight,
            zIndex: 2,
          }}
        >
          <CustomSideMenu toggleSideBar={toggleSideBar} setShowSideBar={setShowSideBar}/>
        </View>
        </Modal>
      )}

      <View
        style={{
          height: windowHeight,
        }}
      >
        <View
          style={{
            // height:
            //   Platform.OS === "ios" ? windowHeight / 5.5 : windowHeight / 4,
          }}
        >
          <Header ToggleSideBar={toggleSideBar} />

        </View>
        {/* Categories */}
        <Text
          style={{
            fontSize: 19.33,
            fontWeight: "500",
            color: COLORS.purple,
            lineHeight: 19,
            marginBottom: 3,
            marginTop: 20,
          }}
        >
          Favourites
        </Text>
        <View
          style={{
            marginTop: 10,
            flex: 1,
          }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={ARTISANS}
            renderItem={renderTalentsList}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: COLORS.purple,
          position: "absolute",
          bottom: Platform.OS === "android" ? 25 : 47,
          width: windowWidth,
          height: 48,
          justifyContent: "center",
        }}
      >
        <CustomFooter />
      </View>
    </Container>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  descText: {
    marginTop: 15,
    fontSize: 13.33,
    lineHeight: 19,
    fontWeight: "400",
  },
  artisansContainer: {
    backgroundColor: COLORS.white,
    marginVertical: 6,
    borderRadius: 9,
    shadowColor: "#868686",
    shadowOpacity: 0.5,
  },
  aritisansList: {
    flexDirection: "row",
    width: "100%",
  },
  category: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 0.9,
    marginVertical: 9,
    borderColor: COLORS.purple,
    marginHorizontal: 3,
  },
  categoryText: {
    fontSize: 11.11,
    fontWeight: "400",
    lineHeight: 15,
  },
  artisanTittle: {
    color: COLORS.purple,
    fontWeight: '600',
    lineHeight: 19,
    marginVertical: 3,
  }
});
