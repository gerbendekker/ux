import { PLATFORM } from 'aurelia-framework';
export { UxIconTheme } from './ux-icon-theme';
export function configure(config) {
    config.globalResources([
        PLATFORM.moduleName('./ux-icon')
    ]);
}
