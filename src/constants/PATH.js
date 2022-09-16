import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

const PATH = [
  {
    name: 'Home Page',
    icon: <Entypo name="home" size={26.65} color="white" />,
    to: 'home-screen'
  },
  {
    name: 'Profile',
    icon: <AntDesign name="user" size={24} color="white" />,
    to: 'profile'
  },
  {
    name: 'Favourites',
    icon: <AntDesign name="hearto" size={24} color="white" />,
    to: 'favourites'
  },
  {
    name: 'Chatbox',
    icon: <Ionicons name="chatbubbles-outline" size={24} color="white" />,
    to: 'messages'
  },
  {
    name: 'Settings',
    icon: <Ionicons name="settings" size={24} color="white" />,
    to: 'messages'
  },
];

export default PATH;