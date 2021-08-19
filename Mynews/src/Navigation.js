import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import 'react-native-gesture-handler';


import HomePageScreen from './HomePage'
// import BottomScreen from './Bottom'


const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();


// const HomeTabs = () => {
//     return (
//         <Tab.Navigator screenOptions={{ showLabel: true }}>
//             <Tab.Screen name="HomePage" options={{
//                 headerShown: true,
//                 tabBarIcon: ({ focused, color }) => (
//                     <Icon name="newspaper" color={focused ? '#1E90FF' : color} size={25} />
//                 ),
//             }} component={HomePageScreen} />
//             <Tab.Screen name="Bottom" options={{
//                 headerShown: false,
//                 tabBarIcon: ({ focused, color }) => (
//                     <Icon name="account-circle" color={focused ? '#1E90FF' : color} size={25} />
//                 ),
//             }} component={BottomScreen} />

//         </Tab.Navigator>
//     )
// }




const Navigation = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="News" options={{
                headerShown: true, headerStyle: {
                    backgroundColor: '#1E90FF',


                },
            }} component={HomePageScreen} />
            {/* <Stack.Screen name="Bottom" options={{ headerShown: false }} component={BottomScreen} /> */}
        </Stack.Navigator>
    );
};

export default Navigation;