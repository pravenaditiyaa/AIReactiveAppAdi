import React, { Component } from 'react';
import { 
  Alert, Button, Platform, StyleSheet, ScrollView, 
  Image, TouchableHighlight, TouchableOpacity, 
  TouchableNativeFeedback, TouchableWithoutFeedback, 
  Text, TextInput, View 
     } from 'react-native';
import CallDetectorManager from 'react-native-call-detection'

class Greetings extends Component {
  render() {
    return (
      <Text>Welcome {this.props.name1} and {this.props.name2} </Text>
    )
  }
}

class Blinks extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowText: true };

    setInterval(() => {
      this.setState(previousState => {
        return { isShowText: !previousState.isShowText };
      })
    }, 1000)
  }

  render() {
    display = this.state.isShowText ? "I am Watching You " + this.props.name : "";
    return (
      <Text style={styles.bigBlue}> {display}</Text>
    )
  }
}


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Text> Hi World</Text>
        <Greetings name1="Praven" name2="Eswar"></Greetings>
        <Blinks  name="Shanthi"></Blinks> */}
        <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
        <View style={{ flex: 3, backgroundColor: 'skyblue' }} />
        <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({ text })}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
        <Button
            onPress={this.startListenerTapped}
            title="OK!"
            color="#841584"
          />
          <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback
            onPress={this._onPressButton}
            >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
        {/* <ScrollView>
          <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Text style={{ fontSize: 96 }}>If you like</Text>
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Text style={{ fontSize: 96 }}>Scrolling down</Text>
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Text style={{ fontSize: 96 }}>What's the best</Text>
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Text style={{ fontSize: 96 }}>Framework around?</Text>
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
          <Text style={{ fontSize: 80 }}>React Native</Text>
        </ScrollView> */}
      </View>
    )
  }

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  startListenerTapped() {
    Alert.alert('Enabling missed call')
    this.callDetector = new CallDetectorManager((event) => {
      // For iOS event will be either "Connected",
      // "Disconnected","Dialing" and "Incoming"

      // For Android event will be either "Offhook",
      // "Disconnected", "Incoming" or "Missed"
      Alert.alert("missed call");

      if (event === 'Disconnected') {
        // Do something call got disconnected
      }
      else if (event === 'Connected') {
        // Do something call got connected
        // This clause will only be executed for iOS
      }
      else if (event === 'Incoming') {
        Alert.alert('Incoming')
        // Do something call got incoming
      }
      else if (event === 'Dialing') {
        Alert.alert('Incoming')
        // Do something call got dialing
        // This clause will only be executed for iOS
      }
      else if (event === 'Offhook') {
        //Device call state: Off-hook. 
        // At least one call exists that is dialing,
        // active, or on hold, 
        // and no calls are ringing or waiting.
        // This clause will only be executed for Android
      }
      else if (event === 'Missed') {
        Alert.alert("missed call")
        // Do something call got missed
        // This clause will only be executed for Android
      }
    },
      true, // if you want to read the phone number of the incoming call [ANDROID], otherwise false
      () => { }, // callback if your permission got denied [ANDROID] [only if you want to read incoming number] default: console.error
      {
        title: 'Phone State Permission',
        message: 'This app needs access to your phone state in order to react and/or to adapt to incoming calls.'
      } // a custom permission request message to explain to your user, why you need the permission [recommended] - this is the default one
    )
  }

  stopListenerTapped() {
    this.callDetector && this.callDetector.dispose();
  }

}


const styles = StyleSheet.create({
  container: {
    height: 300,
    flexDirection: 'column',
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  bigBlue: {
    color: 'blue',
    fontSize: 20
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
