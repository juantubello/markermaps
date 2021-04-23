import React from 'react';
import { StyleSheet, View, Text, Button, Dimensions } from 'react-native';

export default () => {
    return (
        <View style={styles.panel}>
            <Button color='#7bdcb5'title="Lista" />
            <Button color='#7bdcb5'title="Mostrar/Ocultar" />
        </View>
    )
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
