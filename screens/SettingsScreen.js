import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  ExponentConfigView,
} from '@exponent/samples';

export default class SettingsScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Additional Information'
    },
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

        { /* Go ahead and delete ExponentConfigView and replace it with your
           * content, we just wanted to give you a quick view of your config */ }
        <ExponentConfigView />

      </ScrollView>
    );
  }
}

// defines style attributes
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
