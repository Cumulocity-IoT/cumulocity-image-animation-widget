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
import { Component, Input } from '@angular/core';
import { WidgetConfig } from './i-widget-config';
import * as _ from 'lodash';

@Component({
  selector: 'image-animation-widget-config',
  templateUrl: './image-animation-widget-config.component.html',
})
export class ImageAnimationWidgetConfig {

  private imageFileAsString: string;

  @Input() config: WidgetConfig = {
      imageText: '',
      imageText2: '',
      height: 300,
      width: 300,
      remainingImagePercentage: 5,
      animationTimeInSeconds: 2,
      animationAction: 'SCROLL UP',
      rotationInDegrees: 0,
      animationActionOn : '',
      animationActionOff: '',
      shortDescriptionOffToOn: '',
      shortDescriptionOnToOff: '',
      shortDescriptionLocation: 'ABOVE'
    };

    public onImageFileUpdated ($event: Event ) {
      const imageFile = ($event.target as HTMLInputElement).files[0];
      if (imageFile.type.match('image.*')) {
        if (['png', 'jpeg'].indexOf(imageFile.type.split("/")[1]) >= 0) {
          const reader = new FileReader();
          reader.readAsDataURL(imageFile);
          reader.onload = () => {
            this.imageFileAsString = reader.result as string;
            _.set(this.config, 'imageText', this.imageFileAsString);
          };
        } else {
          console.error('Image file can only be .png, .jpeg, or .jpg');         
        }
      } else {
        console.error('Image file must be either .png, .jpeg, or .jpg');
      }
    }

    public onImageFile1Updated ($event: Event ) {
      const imageFile = ($event.target as HTMLInputElement).files[0];
      if (imageFile.type.match('image.*')) {
        if (['png', 'jpeg'].indexOf(imageFile.type.split("/")[1]) >= 0) {
          const reader = new FileReader();
          reader.readAsDataURL(imageFile);
          reader.onload = () => {
            this.imageFileAsString = reader.result as string;
            _.set(this.config, 'imageText', this.imageFileAsString);
          };
        } else {
          console.error('From image file can only be .png, .jpeg, or .jpg');         
        }
      } else {
        console.error('From image file must be either .png, .jpeg, or .jpg');
      }
    }

    public onImageFile2Updated ($event: Event ) {
      const imageFile = ($event.target as HTMLInputElement).files[0];
      
      if (imageFile.type.match('image.*')) {
        if (['png', 'jpeg'].indexOf(imageFile.type.split("/")[1]) >= 0) {
          const reader = new FileReader();
          reader.readAsDataURL(imageFile);
          reader.onload = () => {
            this.imageFileAsString = reader.result as string;
            _.set(this.config, 'imageText2', this.imageFileAsString);
          };
        } else {
          console.error('To image file can only be .png, .jpeg, or .jpg');         
        }
      } else {
        console.error('To image file must be either .png, .jpeg, or .jpg');
      }
    }

    public setHeight($event: Event) {
      const height: number = Number(($event.target as HTMLInputElement).value);
      if (height >= 0) {
        this.config.height = height;
      } else {
        console.error('height must be a positive value');
      }
    }

    public setWidth($event: Event) {
      const width: number = Number(($event.target as HTMLInputElement).value);
      if (width >= 0) {
        this.config.width = width;
      } else {
        console.error('width must be a positive value');
      }
    }

    public setRemainingImagePercentage($event: Event) {
      const remainingImagePercentage: number = Number(($event.target as HTMLInputElement).value);
      if (remainingImagePercentage >= 0 && remainingImagePercentage <= 100) {
        this.config.remainingImagePercentage = remainingImagePercentage;
      } else {
        console.error('remainingImagePercentage must be between 0 and 100');
      }
    }

    public setRotationInDegrees($event: Event) {
      const rotationInDegrees: number = Number(($event.target as HTMLInputElement).value);
      if (rotationInDegrees >= -360 && rotationInDegrees <= 360) {
        this.config.rotationInDegrees = rotationInDegrees;
      } else {
        console.error('setRotationInDegrees must be between -360 and 360');
      }
    }

    public setAnimationTimeInSeconds($event: Event) {
      const animationTimeInSeconds: number = Number(($event.target as HTMLInputElement).value);
      if (animationTimeInSeconds >= 0 && animationTimeInSeconds <= 3600) {
        this.config.animationTimeInSeconds = animationTimeInSeconds;
      } else {
        console.error('animationTimeInSeconds must be between 0 and 3600');
      }
    }

}