import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { UxInputInfoTheme } from './ux-input-info-theme';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./ux-input-info')
  ]);
}
