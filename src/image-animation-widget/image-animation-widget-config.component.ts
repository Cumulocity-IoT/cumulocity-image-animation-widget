import { Component, Input } from '@angular/core';
import { WidgetConfig } from './i-widget-config';
import _ from 'lodash';

@Component({
    template: `
        <div class="form-group">

          <c8y-form-group>
            <label for="AnimationAction">Animation type</label>
            <select class="form-control" name="AnimationAction" id="AnimationAction" placeholder="Set the type of animation" [(ngModel)]="config.animationAction" required>
              <option value="FADE IN">Fade in</option>
              <option value="FADE OUT">Fade out</option>
              <option value="SWAP">Swap</option>
              <option value="ROTATE">Rotate</option>
              <option value="SCROLL UP">Scroll up</option>
              <option value="SCROLL DOWN">Scroll down</option>
              <option value="SCROLL LEFT">Scroll left</option>
              <option value="SCROLL RIGHT">Scroll right</option>
            </select>
          </c8y-form-group>

          <ng-container *ngIf="config.animationAction !== 'SWAP'">
            <c8y-form-group>
              <label for="imageFile">Image file (png, jpeg, jpg)</label>
              <input type="file" class="form-control" id="imageFile" name="imageFile" alt="Image file" style="width:100%" accept=".png, .jpeg, .jpg" placeholder="Select the image file" (change)="onImageFileUpdated($event)" required>
            </c8y-form-group>
          </ng-container>

          <ng-container *ngIf="config.animationAction === 'SWAP'">
            <c8y-form-group>
              <label for="imageFile1">From image file (png, jpeg, jpg)</label>
              <input type="file" class="form-control" id="imageFile1" name="imageFile1" alt="From image file" style="width:100%" accept=".png, .jpeg, .jpg" placeholder="Select the 'From' image file" (change)="onImageFile1Updated($event)" required>
            </c8y-form-group>
          </ng-container>

          <ng-container *ngIf="config.animationAction === 'SWAP'">
            <c8y-form-group>
              <label for="imageFile2">To image file (png, jpeg, jpg)</label>
              <input type="file" class="form-control" id="imageFile2" name="imageFile2" alt="To image file" style="width:100%" accept=".png, .jpeg, .jpg" placeholder="Select the 'To' image file" (change)="onImageFile2Updated($event)" required>
            </c8y-form-group>
          </ng-container>

          <c8y-form-group>
            <label for="height">Height (in pixels)</label>
            <input type="number" class="form-control" id="height" name="height" style="width:100%" placeholder="Set the height of your image" [ngModel]="config.height" min="0" (change)="setHeight($event)" required>
          </c8y-form-group>

          <c8y-form-group>
            <label for="width">Width (in pixels)</label>
            <input type="number" class="form-control" id="width" name="width" style="width:100%" placeholder="Set the width of your image" [ngModel]="config.width" min="0" (change)="setWidth($event)" required>
          </c8y-form-group>
        
          <ng-container *ngIf="config.animationAction !== 'ROTATE' && config.animationAction !== 'SWAP'">
            <c8y-form-group>
              <label for="remainingImagePercentage">Remaining image (in percentage)</label>
              <input type="number" class="form-control" id="remainingImagePercentage" name="remainingImagePercentage" style="width:100%" placeholder="Set the image percentage which will remain on screen after animation" [ngModel]="config.remainingImagePercentage" min="0" max="100" (change)="setRemainingImagePercentage($event)" required>
            </c8y-form-group>
          </ng-container>

          <ng-container *ngIf="config.animationAction === 'ROTATE'">
            <c8y-form-group>
              <label for="rotationDegrees">Rotation (in degrees)</label>
              <input type="number" class="form-control" id="rotationInDegrees" name="rotationInDegrees" style="width:100%" placeholder="Set the image rotation in degrees" [ngModel]="config.rotationInDegrees" min="-360" max="360" (change)="setRotationInDegrees($event)" required>
            </c8y-form-group>
          </ng-container>

          <c8y-form-group>
            <label for="animationTimeInSeconds">Animation time (in seconds)</label>
            <input type="number" class="form-control" id="animationTimeInSeconds" name="animationTimeInSeconds" style="width:100%" placeholder="Set the amount of time taken to complete the animation" [ngModel]="config.animationTimeInSeconds" min="0" max="3600" (change)="setAnimationTimeInSeconds($event)" required>
          </c8y-form-group>

        </div>
      `
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
      rotationInDegrees: 0
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