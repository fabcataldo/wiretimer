import React from 'react';
import { Text, SafeAreaView, TextInput, View } from 'react-native';
import FinishViewStyles from './FinishViewStyles';
import ResponsiveCentered from './ResponsiveCentered';
import ActionButton from './ActionButton';
import i18n from '../../i18n/i18n';

const FinishView = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 4, justifyContent: 'space-between' }}>
                <Text style={FinishViewStyles.mainHeader}>{i18n.FINISH.MAIN_HEADER}</Text>
                <Text style={FinishViewStyles.timerSubHeader}>00:15:00</Text>
                <View style={{ flex: 0.2 }}>

                </View>
            </View>
            <View style={{ flex: 1 }}>
                <ResponsiveCentered>
                    <Text style={FinishViewStyles.activityNameLabel}>{i18n.FINISH.ACTIVITY_NAME_HEADER}</Text>
                </ResponsiveCentered>
                <ResponsiveCentered>
                    <TextInput style={FinishViewStyles.activityNameInput}></TextInput>
                </ResponsiveCentered>
            </View>

            <View style={{ flex: 3}}>
                <ResponsiveCentered>
                    <View style={ FinishViewStyles.actionButtonsContainer }>
                        <ActionButton label={i18n.CANCEL} backgroundColor={'#F39527'} textColor={'#fff'}>
                        </ActionButton>
                        <ActionButton label={i18n.SAVE} backgroundColor={'#00CD5E'} textColor={'#fff'}>
                        </ActionButton>
                    </View>
                </ResponsiveCentered>

            </View>


        </SafeAreaView>
    )
}

export default FinishView;