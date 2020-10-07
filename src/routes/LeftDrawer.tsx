import React from 'react';
import { View } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import AppRoutes from './app.routes';

const Drawer = createDrawerNavigator();

export default () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerComp {...props} />}>
            <Drawer.Screen name="AppRoutes" component={AppRoutes} />
        </Drawer.Navigator>
    );
};

export const CustomDrawerComp = (props) => {
    const { navigation } = props;

    return (
        <DrawerContentScrollView {...props}>
            <View style={{ flexGrow: 2 }}>
                <DrawerItem
                    label="Início"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </DrawerContentScrollView>
    );
};