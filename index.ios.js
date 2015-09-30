/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'; //Strict mode, disables some bad features of Javascript, makes things better!!
var React = require('react-native'); //get react in the code
var SearchPage = require('./SearchPage');
var styles = React.StyleSheet.create ({ //styling overall themes
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

//actual code below!

class PropertyFinderApp extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}
      />
    );
  }
}

React.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
