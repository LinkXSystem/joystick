/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {JoystickDemuxed, TouchEventDemuxer} from 'joystick-component-lib';

const Demuxer = TouchEventDemuxer([JoystickDemuxed, JoystickDemuxed]);

const firstHandler = (xProp, yProp) => {
  console.log(`first joystick: ${xProp}, ${yProp}`);
};

const secondHandler = (xProp, yProp) => {
  console.log(`second joystick: ${xProp}, ${yProp}`);
};

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Demuxer
          childrenProps={[
            {
              neutralPointX: 100,
              neutralPointY: 100,
              length: 75,
              shape: 'circular',
              isSticky: true,
              onJoystickMove: firstHandler,
              draggableStyle: styles.draggableStyle,
              backgroundStyle: styles.circularBackgroundStyle,
            },
            {
              neutralPointX: 200,
              neutralPointY: 300,
              length: 80,
              shape: 'circular',
              isSticky: true,
              onJoystickMove: secondHandler,
              draggableStyle: styles.draggableStyle,
              backgroundStyle: styles.circularBackgroundStyle,
            },
          ]}
        />
        <Text
          style={styles.text}
          onPress={() => {
            console.warn('======================');
            console.log('Touch');
            console.warn('======================');
          }}>
          Both joysticks can be moved simultaneously!
        </Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
  },
  draggableStyle: {
    height: 40,
    width: 40,
    backgroundColor: '#D12668',
  },
  backgroundStyle: {
    backgroundColor: '#FFFFFF',
    borderColor: '#D12668',
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  circularBackgroundStyle: {
    backgroundColor: '#FFFFFF',
    borderColor: '#D12668',
    borderWidth: 3,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#D12668',
    textAlign: 'center',
    top: 400,
  },
});

export default App;
