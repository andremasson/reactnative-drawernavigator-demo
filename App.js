import React from 'react'
import { StyleSheet, Text, View, Platform, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import { purple, white } from './colors'
import { DrawerActions } from 'react-navigation-drawer'

function AndreStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

function Home ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  )
}

function Dashboard ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  )
}

const routeConfigs = {
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: () => <FontAwesome name='home' size={20} color='red' />
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      drawerLabel: 'Dashboard',
      drawerIcon: () => <FontAwesome name='dashboard' size={20} color='red' />
    }
  },
}

const Drawer = createDrawerNavigator(routeConfigs)

const AppContainer = createAppContainer(Drawer)

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <AndreStatusBar  backgroundColor={purple} barStyle='light-content' />
        <AppContainer />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
