import { App, Component } from 'vue';

export default function loadComponents(app: App<Element>): void {
    interface ModuleMap {
        [key: string]: {
            default: Component; 
        };
    }

    const modules: ModuleMap = import.meta.glob('/src/assets/icons/*.svg', { eager: true }) as ModuleMap;

    for (const path in modules) {
      if (Object.prototype.hasOwnProperty.call(modules, path)) {
        const segments = path.split('/');
        const filename = segments[segments.length - 1].replace('.svg', '');
        const componentName = filename
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('') + 'Icon';

        app.component(componentName, modules[path].default);
      }
    }
}
