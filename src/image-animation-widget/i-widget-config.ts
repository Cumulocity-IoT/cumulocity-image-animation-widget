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
export interface WidgetConfig {
    device?: {
        id: string;
        name: string;
    };
    imageText: string;
    imageText2: string;
    height: number;
    width: number;
    animationTimeInSeconds: number,
    animationAction: 'SCROLL UP'| 'SCROLL DOWN' | 'SCROLL LEFT' | 'SCROLL RIGHT' | 'FADE OUT' | 'FADE IN' | 'ROTATE' | 'SWAP';
    remainingImagePercentage: number;
    rotationInDegrees: number;
    animationActionOn: string;
    animationActionOff: string;
    shortDescriptionOffToOn: string;
    shortDescriptionOnToOff: string;
    shortDescriptionLocation: 'ABOVE' | 'BELOW';
}