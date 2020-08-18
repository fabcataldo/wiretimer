import React from 'react';
import { Text, View } from 'react-native';

const ResponsiveCentered = ({ children }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 0.1 }}></View>
            <View style={{ flex: 0.8 }}>
                {children}
            </View>
            <View style={{ flex: 0.1 }}></View>
        </View>
    )
}

export default ResponsiveCentered;