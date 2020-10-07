import React from 'react';
import { useDispatch } from 'react-redux';
import { Text, TouchableOpacity } from 'react-native'

import { AppConfigActions } from '../redux/actions';


import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome, AntDesign, FontAwesome5, Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';


import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Friends from '../pages/Friends/Friends';
import Groups from '../pages/Groups/Groups';
import Members from '../pages/Members/Members';
import Games from '../pages/Games/Games';
import Privacy from '../pages/Privacy/Privacy';
import Contact from '../pages/Contact/Contact'


const Stack = createStackNavigator();

const AppRoutes: React.FC = (navigation) => {
    const dispatch = useDispatch();

    const options = {
        headerLeft: () => (
            <TouchableOpacity onPress={navigation.openDrawer}>
                <Text style={{ margin: 8 }}>Esquerdo</Text>
            </TouchableOpacity>
        ),
        headerRight: () => (
            <TouchableOpacity
                onPress={() => dispatch(AppConfigActions.toggleRightDrawer())}>
                <Text style={{ margin: 8 }}>Direito</Text>
            </TouchableOpacity>
        ),
    };

    return (
        <Stack.Navigator>
            <Stack.Screen options={options} name="Home" component={Home} />
            <Stack.Screen options={options} name="Profile" component={Profile} />
            <Stack.Screen options={options} name="Friends" component={Friends} />
            <Stack.Screen options={options} name="Groups" component={Groups} />
            <Stack.Screen options={options} name="Members" component={Members} />
            <Stack.Screen options={options} name="Games" component={Games} />
            <Stack.Screen options={options} name="Privacy" component={Privacy} />
            <Stack.Screen options={options} name="Contact" component={Contact} />
        </Stack.Navigator>

    ),
};

export default AppRoutes