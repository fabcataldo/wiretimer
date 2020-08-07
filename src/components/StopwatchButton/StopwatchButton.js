import React from 'react';
import { Text, TouchableOpacity, Animated } from 'react-native';
import StopwatchButtonStyles from './StopwatchButtonStyles';
import i18n from '../../i18n/i18n';
import moment from 'moment';

const StopwatchButton = (props) => {
    const {time} = props;
    const {timerOnPressAction} = props;
    const {startOnPressAction} = props;
    const {paused} = props;

    //genera efecto "blinker", o sea, tartamudea el timer
    const timerOpacity = new Animated.Value(1);
    const BLINK_DELAY = 1500;
    const blinker = toValue => {
        if(paused){
            Animated.timing(timerOpacity, {
                toValue: toValue,
                duration: BLINK_DELAY
            }).start(()=>{
                blinker(toValue === 1 ? 0 : 1);        
            });    
        } else{
            Animated.timing(timerOpacity, {
                toValue: 1,
                duration: BLINK_DELAY
            }).start();    
        }
    }

    blinker(0);

    if (time > 0) {
        return(
            <TouchableOpacity onPress={timerOnPressAction} 
                style={StopwatchButtonStyles.mainActionButton}>
                <Animated.View style={StopwatchButtonStyles.mainActionButton, 
                    {opacity: timerOpacity}}>
                    <Text style={StopwatchButtonStyles.mainActionButtonText}>
                        {moment.utc(time).format(i18n.TIME_FORMAT)}
                    </Text>
                    <Text style={[StopwatchButtonStyles.mainActionButtonPauseText, StopwatchButtonStyles.mainActionButtonText]}>
                        {i18n.STOP_WATCH.PAUSE}
                    </Text>
                </Animated.View>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity style={StopwatchButtonStyles.mainActionButton} onPress={startOnPressAction}>
            <Text style={StopwatchButtonStyles.mainActionButtonText}>
                {i18n.STOP_WATCH.START}
            </Text>
        </TouchableOpacity>
    );
}

export default StopwatchButton;