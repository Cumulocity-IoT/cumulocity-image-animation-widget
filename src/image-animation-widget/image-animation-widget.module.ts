import {CoreModule, HOOK_COMPONENTS} from "@c8y/ngx-components";
import {NgModule} from "@angular/core";

// This will import css from the styles folder (Note: will be applied globally, not scoped to the module/components)
import '~styles/index.css';
import { ImageAnimationWidget } from "./image-animation-widget.component";
import { ImageAnimationWidgetConfig } from "./image-animation-widget-config.component";

@NgModule({
    imports: [
        CoreModule
    ],
    declarations: [ImageAnimationWidget, ImageAnimationWidgetConfig],
    entryComponents: [ImageAnimationWidget, ImageAnimationWidgetConfig],
    providers: [
        // Connect the widget to Cumulocity via the HOOK_COMPONENT injection token
        {
            provide: HOOK_COMPONENTS,
            multi: true,
            useValue: {
                id: 'global.presales.image.animation.widget',
                label: 'Image Animation',
                description: 'Animates an image: scroll up, scroll down, scroll left, scroll right, fade out, fade in, rotate, swap',
                component: ImageAnimationWidget,
                configComponent: ImageAnimationWidgetConfig,
                previewImage: require("~styles/previewImage.png")
            }
        }
    ],
})
export class ImageAnimationWidgetModule {}
