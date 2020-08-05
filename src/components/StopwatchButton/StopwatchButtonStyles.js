import {StyleSheet} from 'react-native';

const StopwatchButtonStyles = StyleSheet.create({
    mainActionButton:{
        width: 284,
        height: 284,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00CD5E',
        borderRadius: 142
    },
    mainActionButtonText:{
        fontSize: 40,
        color:'#fff',
        fontWeight: 'bold'
    },
    mainActionButtonPauseText:{
        fontSize: 24
    }
})

export default StopwatchButtonStyles