// Card.js is the component for a card layout.
// This will be used for each album.
import React from 'react';
import { View } from 'react-native';

// Passing one component to another will show up as 
// 'props.children'. In this case we are passing 
// <Text>{ props.album.title }<Text> from AlbumDetail.js
// to this component.
const Card = (props) => {
    return (
        <View style={ styles.containerStyle }>
            { props.children }
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1, // The border outlint width.
        borderRadius: 2, // round off corners.
        borderColor: '#ddd', // grey color border.
        borderBottomWidth: 0, // Hide border at the bottom.
        shadowColor: '#000', // A bit of 3d/elevation.
        shadowOffset: { width: 0, height: 2 }, // Shadow on heigh but not left or right.
        shadowOpacity: 0.1, // Making a component see through, gives it a light grey color.
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5, // Spacing 
        marginRight: 5, // Spacing
        marginTop: 10, // Spacing
        backgroundColor: '#fff'
    }
};

export default Card;

