import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { Dialog, React } from 'enmity/metro/common';
import { create } from 'enmity/patcher';
import { get } from 'enmity/api/settings';
import manifest, {name as pluginName} from '../manifest.json';

import Settings from '../src/components/Settings';
const Patcher = create("delete-notifier");

const DeleteNotifier: Plugin = {
    ...manifest,

    onStart() {
        function notificationTool() {
            //empty for now, gotta figure out stuff
            Dialog.show({title: "turned on :thumbsup:", body: "you did it!", confirmText: "go away now"})
            
        }
        if (get(pluginName, "notify_on", true))
        {
            notificationTool()
        }
    },

    onStop() {
        Patcher.unpatchAll();
    },

    getSettingsPanel({ settings }) {
        return <Settings settings={settings} />;
     }
};

registerPlugin(DeleteNotifier);