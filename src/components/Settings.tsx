import { FormRow, FormSection, FormSwitch, ScrollView, View, Image, Text } from 'enmity/components';
import { SettingsStore } from 'enmity/api/settings';
import { React, Constants, Dialog, Navigation, StyleSheet } from 'enmity/metro/common';

interface SettingsProps {
   settings: SettingsStore;
}

export default ({ settings }: SettingsProps) => {
    const styles = StyleSheet.createThemedStyleSheet({
        container: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        },
        image: {
            width: 70,
            height: 70,
            marginTop: 20,
            marginLeft: 20
        },
        title: {
            flexDirection: "column",
        },
        name: {
            fontSize: 30,
            paddingTop: 20,
            paddingLeft: 20,
            paddingRight: 30,
            color: Constants.ThemeColorMap.HEADER_PRIMARY,
        },
        author: {
            fontSize: 15,
            paddingLeft: 50,
            color: Constants.ThemeColorMap.HEADER_SECONDARY,
        },
        info: {
            height: 45,
            paddingTop: 3,
            paddingBottom: 3,
            justifyContent: "center",
            alignItems: "center"
        },
        footer: {
            color: Constants.ThemeColorMap.HEADER_SECONDARY,
            textAlign: 'center',
            paddingTop: 10,
            paddingBottom: 20
        }
    });
    return (
        <ScrollView>
            <View style={styles.title}>
                <Text style={styles.name}>Delete Notifier</Text>
                <Text style={styles.author}>huaraina</Text>
            </View>
            <FormSection title="Delete Notifier">
                <FormRow
                label="Turn off notifications?"
                >
                    <FormSwitch value={
                        settings.getBoolean('notify_on', true)}
                        onValueChange={(value) => {
                            settings.set('notify_on', value)
                        }}
                    />
                </FormRow>
            </FormSection>
        </ScrollView>
    )
};