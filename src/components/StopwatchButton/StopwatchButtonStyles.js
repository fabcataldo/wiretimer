import {StyleSheet} from 'react-native';

const StopwatchButtonStyles = StyleSheet.create({
    mainActionButton:{
        width: 284,
        height: 284,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#00CD5E',
        borderRadius: 142
    },
    mainActionButtonText:{
        fontSize: 40,
        textAlign: 'center',
        color:'#fff',
        fontWeight: 'bold'
    },
    mainActionButtonPauseText:{
        fontSize: 24
    }
})

export default StopwatchButtonStyles