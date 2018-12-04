// header.js is the header/bar component for the whole app.
import React from 'react';
import { Text, View } from 'react-native';

// Create component.
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={ viewStyle }>
          <Text style={ textStyle }>{ props.headerText }</Text>
        </View>
    );
};

// Styling is kept in the same file.
// IT NOT CSS.
// Shadow creates a header bar style.
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        heigh: 60,
        paddingTop: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },

    textStyle: {
      fontSize: 20
    }
};
// Export the component.
export default Header;
