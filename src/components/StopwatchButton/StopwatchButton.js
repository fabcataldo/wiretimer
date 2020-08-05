import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import StopwatchButtonStyles from './StopwatchButtonStyles';
import i18n from '../../i18n/i18n';
import moment from 'moment';

const StopwatchButton = (props) => {
    const {time} = props;
    const {timerOnPressAction} = props;
    const {startOnPressAction} = props;
    if (time > 0) {
        return(
            <TouchableOpacity onPress={timerOnPressAction} style={StopwatchButtonStyles.mainActionButton}>
                <Text style={StopwatchButtonStyles.mainActionButtonText}>
                    {moment.utc(time).format(i18n.TIME_FORMAT)}
                </Text>
                <Text style={[StopwatchButtonStyles.mainActionButtonPauseText, StopwatchButtonStyles.mainActionButtonText]}>
                    {i18n.STOP_WATCH.PAUSE}
                </Text>
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