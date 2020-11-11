/*
* Copyright (c) 2019 Software AG, Darmstadt, Germany and/or its licensors
*
* SPDX-License-Identifier: Apache-2.0
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
 */
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
