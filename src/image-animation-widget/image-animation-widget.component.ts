import { Component, Input, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { WidgetConfig } from './i-widget-config';
import { ICumulocityEvent } from './i-cumulocity-event'
import _ from 'lodash';
import { Realtime } from '@c8y/ngx-components/api';
import { AnimationConfig } from './i-animation-config';

const isBase64 = require('is-base64');

@Component({
  selector: 'image-animation-widget',
  templateUrl: './image-animation-widget.component.html',
  styleUrls: ['./image-animation-widget.component.css'],
  animations: [
    trigger('scrollUp', [
      state('scrollUpStart',
        style({
          position: 'relative',
          top: '0px'
        })
      ),
      state('scrollUpEnd',
        style({
          position: 'relative',
          top: '{{calculatedRemainingImage}}px' }),
          {params: {calculatedRemainingImage: 0}}
      ),
      state('scrollUpReset',
        style({
          position: 'relative',
          top: '0px'
        })
      ),
      transition('scrollUpStart=>scrollUpEnd', [
        animate('{{animationTimeInSeconds}}s')
      ]),
      transition('scrollUpReset=>scrollUpEnd', [
        animate('{{animationTimeInSeconds}}s')
      ]),
      transition('scrollUpEnd=>scrollUpStart', [
        animate('{{animationTimeInSeconds}}s')
      ])
    ]),
    trigger('scrollDown', [
      state('scrollDownStart',
        style({
          position: 'relative',
          bottom: '0px'
        })
      ),
      state('scrollDownEnd',
        style({
          position: 'relative',
          bottom: '{{calculatedRemainingImage}}px'
        }),
        {params: {calculatedRemainingImage: 0}}
      ),
      state('scrollDownReset',
        style({
          position: 'relative',
          bottom: '0px'
        })
      ),
      transition('scrollDownStart=>scrollDownEnd', [
        animate('{{animationTimeInSeconds}}s')
      ]),
      transition('scrollDownReset=>scrollDownEnd', [
        animate('{{animationTimeInSeconds}}s')
      ]),
      transition('scrollDownEnd=>scrollDownStart', [
        animate('{{animationTimeInSeconds}}s')
      ])
    ]),
    trigger('scrollLeft', [
      state('scrollLeftStart',
        style({
          position: 'relative',
          left: '0px'
        })
      ),
      state('scrollLeftEnd',
        style({
          position: 'relative',
          left: '{{calculatedRemainingImage}}px'
        }),
        {params: {calculatedRemainingImage: 0}}
      ),
      state('scrollLeftReset',
        style({
          position: 'relative',
          left: '0px'
        })
      ),
      transition('scrollLeftStart=>scrollLeftEnd', [
        animate('{{animationTimeInSeconds}}s')
      ]),
      transition('scrollLeftReset=>scrollLeftEnd', [
        animate('{{animationTimeInSeconds}}s')
      ]),
      transition('scrollLeftEnd=>scrollLeftStart', [
        animate('{{animationTimeInSeconds}}s')
      ])
    ]),
    trigger('scrollRight', [
      state('scrollRightStart',
        style({
          position: 'relative',
          right: '0px'
        })
      ),
      state('scrollRightEnd',
        style({
          position: 'relative',
          right: '{{calculatedRemainingImage}}px'
        }),
        {params: {calculatedRemainingImage: 0}}
      ),
      state('scrollRightReset',
        style({
          position: 'relative',
          right: '0px'
        })
      ),
      transition('scrollRightStart=>scrollRightEnd', [
        animate('{{animationTimeInSeconds}}s')
      ]),
      transition('scrollRightReset=>scrollRightEnd', [
        animate('{{animationTimeInSeconds}}s')
      ]),
      transition('scrollRightEnd=>scrollRightStart', [
        animate('{{animationTimeInSeconds}}s')
      ])
    ]),
    trigger('fadeOut', [
      state('fadeOutStart',
        style({
          position: 'relative',
          opacity: 1
        })
      ),
      state('fadeOutEnd', 
        style({
          position: 'relative',
          opacity: '{{calculatedRemainingImage}}'
        }),
        {params: {calculatedRemainingImage: 0}}
      ),
      state('fadeOutReset',
        style({
          position: 'relative',
          opacity: 1
        })
      ),
      transition('fadeOutStart=>fadeOutEnd', [
        animate('{{animationTimeInSeconds}}s')
      ]),
      transition('fadeOutReset=>fadeOutEnd', [
        animate('{{animationTimeInSeconds}}s')
      ]),
      transition('fadeOutEnd=>fadeOutStart', [
        animate('{{animationTimeInSeconds}}s')
      ])
    ]),
    trigger('fadeIn', [
      state('fadeInStart',
        style({
          position: 'relative',
          opacity: '{{calculatedRemainingImage}}'
        }),
        {params: {calculatedRemainingImage: 0}}
      ),
      state('fadeInEnd',
        style({
          position: 'relative',
          opacity: 1
        })
      ),
      state('fadeInReset',
        style({
          position: 'relative',
          opacity: '{{calculatedRemainingImage}}'
        }),
        {params: {calculatedRemainingImage: 0}}
      ),
      transition('fadeInStart=>fadeInEnd', [
        animate('{{animationTimeInSeconds}}s')
      ]),
      transition('fadeInReset=>fadeInEnd', [
        animate('{{animationTimeInSeconds}}s')
      ]),
      transition('fadeInEnd=>fadeInStart', [
        animate('{{animationTimeInSeconds}}s')
      ])
    ]),
    trigger('rotate', [
      state('rotateStart',
        style({
          position: 'relative',
          transform: 'rotate(0)' 
        })
      ),
      state('rotateEnd',
        style({
          position: 'relative',
          transform: `rotate({{rotationInDegrees}}deg)`
        }),
        {params: {rotationInDegrees: 0}}
      ),
      state('rotateReset',
        style({
          position: 'relative',
          transform: 'rotate(0)' 
        })
      ),
      transition('rotateStart => rotateEnd', [
        animate(`{{animationTimeInSeconds}}s ease-in`)
      ]),
      transition('rotateReset=>rotateStart', [
        animate(`{{animationTimeInSeconds}}s ease-out`)
      ]),
      transition('rotateEnd => rotateStart', [
        animate(`{{animationTimeInSeconds}}s ease-out`)
      ])
    ]),
    trigger('swap', [
      state('swapStart',
        style({
          position: 'relative',
          opacity: 1
        })
      ),
      state('swapEnd', 
        style({
          position: 'relative',
          opacity: 0
        })
      ),
      state('swapReset',
        style({
          position: 'relative',
          opacity: 1
        })
      ),
      transition('swapStart=>swapEnd', [
        animate('{{animationTimeInSeconds}}s')
      ]),
      transition('swapReset=>swapStart', [
        animate('{{animationTimeInSeconds}}s')
      ]),
      transition('swapEnd=>swapStart', [
        animate('{{animationTimeInSeconds}}s')
      ])
    ])
  ]
})
export class ImageAnimationWidget implements DoCheck, OnDestroy, OnInit {
  
  @Input() public config: WidgetConfig;

  public calculatedRemainingImage: number;
  public animationConfig: AnimationConfig;

  private realtimeEventsSubscription;
  private currentSwapImage = 'imageText';
  public currentSwapImageText = '';

  constructor(private realtime: Realtime) {
    this.resetAnimationConfig();
  }

  public ngOnInit(): void {

    // Listen for 'AnimationAction' and 'AnimationConfiguration' events
    this.realtimeEventsSubscription = this.realtime.subscribe(`/events/${this.config.device.id}`, (event: ICumulocityEvent) => {
      
      // SCROLL-TOGGLE
      if (event.data.data.type === 'AnimationAction' && event.data.data.text === 'SCROLL-TOGGLE'
        && ( this.config.animationAction === 'SCROLL UP' ||
             this.config.animationAction === 'SCROLL DOWN' ||
             this.config.animationAction === 'SCROLL LEFT' ||
             this.config.animationAction === 'SCROLL RIGHT') ) {
        const toggle = !this.animationConfig.scroll.toggle;
        this.resetAnimationConfig();
        this.animationConfig.scroll.toggle = toggle;
      }

      // SCROLL-START
      if (event.data.data.type === 'AnimationAction' && event.data.data.text === 'SCROLL-START'
        && ( this.config.animationAction === 'SCROLL UP' ||
            this.config.animationAction === 'SCROLL DOWN' ||
            this.config.animationAction === 'SCROLL LEFT' ||
            this.config.animationAction === 'SCROLL RIGHT') ) {
        this.resetAnimationConfig();
        this.animationConfig.scroll.start = true;
      }
    
      // SCROLL-END
      if (event.data.data.type === 'AnimationAction' && event.data.data.text === 'SCROLL-END'
        && ( this.config.animationAction === 'SCROLL UP' ||
             this.config.animationAction === 'SCROLL DOWN' ||
             this.config.animationAction === 'SCROLL LEFT' ||
             this.config.animationAction === 'SCROLL RIGHT') ) {
          this.resetAnimationConfig();
          this.animationConfig.scroll.end = true;
      }

      // FADE-TOGGLE
      if (event.data.data.type === 'AnimationAction' && event.data.data.text === 'FADE-TOGGLE'
        && ( this.config.animationAction === 'FADE OUT' ||
             this.config.animationAction === 'FADE IN') ) {
          const toggle = !this.animationConfig.fade.toggle;
          this.resetAnimationConfig();
          this.animationConfig.fade.toggle = toggle;
      }

      // FADE-START
      if (event.data.data.type === 'AnimationAction' && event.data.data.text === 'FADE-START'
        && ( this.config.animationAction === 'FADE OUT' ||
             this.config.animationAction === 'FADE IN') ) {
          this.resetAnimationConfig();
          this.animationConfig.fade.start = true;
      }

      // FADE-END
      if (event.data.data.type === 'AnimationAction' && event.data.data.text === 'FADE-END'
        && ( this.config.animationAction === 'FADE OUT' ||
             this.config.animationAction === 'FADE IN') ) {
          this.resetAnimationConfig();
          this.animationConfig.fade.end = true;
      }

      // ROTATE-TOGGLE
      if (event.data.data.type === 'AnimationAction' && event.data.data.text === 'ROTATE-TOGGLE'
        && ( this.config.animationAction === 'ROTATE') ) {
          const toggle = !this.animationConfig.rotate.toggle;
          this.resetAnimationConfig();
          this.animationConfig.rotate.toggle = toggle;
      }

      // ROTATE-START
      if (event.data.data.type === 'AnimationAction' && event.data.data.text === 'ROTATE-START'
        && ( this.config.animationAction === 'ROTATE') ) {
          this.resetAnimationConfig();
          this.animationConfig.rotate.start = true;
      }

      // ROTATE-END
      if (event.data.data.type === 'AnimationAction' && event.data.data.text === 'ROTATE-END'
        && ( this.config.animationAction === 'ROTATE') ) {
        this.resetAnimationConfig();
        this.animationConfig.rotate.end = true;
      }
    
      // SWAP-TOGGLE
      if (event.data.data.type === 'AnimationAction' && event.data.data.text === 'SWAP-TOGGLE'
        && ( this.config.animationAction === 'SWAP') ) {
          const toggle = !this.animationConfig.swap.toggle;
          this.resetAnimationConfig();
          this.animationConfig.swap.toggle = toggle;
      }

      // SWAP-START
      if (event.data.data.type === 'AnimationAction' && event.data.data.text === 'SWAP-START'
        && ( this.config.animationAction === 'SWAP') ) {
          if (this.currentSwapImage === 'imageText2') {
            this.resetAnimationConfig();
            this.animationConfig.swap.end = true;
          }
      }

      // SWAP-END
      if (event.data.data.type === 'AnimationAction' && event.data.data.text === 'SWAP-END'
        && ( this.config.animationAction === 'SWAP') ) {
          if (this.currentSwapImage === 'imageText') {
            this.resetAnimationConfig();
            this.animationConfig.swap.end = true;
          }
      }

      // RESET
      if (event.data.data.type === 'AnimationAction' && event.data.data.text === 'RESET') {
          // Reset
          this.resetAnimationConfig();
          this.animationConfig.reset = true;
      }

      // ANIMATION CONFIGURATION
      if (event.data.data.type === 'AnimationConfiguration') {
        try {
          const newConfigurationData: Partial<WidgetConfig> = JSON.parse(event.data.data.text);

          if ('imageText' in newConfigurationData) {
            if (isBase64(newConfigurationData.imageText, {mimeRequired: true})) {
              this.config.imageText = newConfigurationData.imageText;
            } else {
              console.error('The image file supplied in the configuration is not a valid base64 encoded image.')
            }
          }

          if (newConfigurationData.animationAction === 'SWAP') {
            if ('imageText2' in newConfigurationData) {
              if (isBase64(newConfigurationData.imageText2, {mimeRequired: true})) {
                this.config.imageText2 = newConfigurationData.imageText2;
              } else {
                console.error('The image file supplied in the configuration is not a valid base64 encoded image.')
              }
            }
          }

          if ('height' in newConfigurationData){
            if (newConfigurationData.height >= 0) {
              this.config.height = newConfigurationData.height;
            } else {
              console.error(`config.height must be supplied as a number greater than or equal to 0 e.g. '300'`);
            }
          }

          if ('width' in newConfigurationData) {
            if (newConfigurationData.width >= 0) {
              this.config.width = newConfigurationData.width;
            } else {
              console.error(`config.width must be supplied as a number greater than or equal to 0 e.g. '500'`);
            }
          }

          if (newConfigurationData.animationAction !== 'ROTATE' && newConfigurationData.animationAction !== 'SWAP') {
            if ('remainingImagePercentage' in newConfigurationData) {
              if (newConfigurationData.remainingImagePercentage >= 0 && newConfigurationData.remainingImagePercentage <= 100) {
                this.config.remainingImagePercentage = newConfigurationData.remainingImagePercentage;
              } else {
                console.error(`config.remainingImagePercentage must be a number between 0 and 100`);
              }
            }
          }

          if (newConfigurationData.animationAction === 'ROTATE') {
            if (newConfigurationData.rotationInDegrees >= -360 && newConfigurationData.rotationInDegrees <= 360) {
              this.config.rotationInDegrees = newConfigurationData.rotationInDegrees;
            } else {
              console.error(`config.rotationInDegrees must be a number between -360 and 360`);
            }
          }

          if ('animationTimeInSeconds' in newConfigurationData) {
            if (newConfigurationData.animationTimeInSeconds >= 0) {
              this.config.animationTimeInSeconds = newConfigurationData.animationTimeInSeconds;
            } else {
              console.error(`config.animationTimeInSeconds must be supplied as a number greater than or equal to 0 e.g. 2`);
            }
          }

          if ('animationAction' in newConfigurationData) {
            if (newConfigurationData.animationAction === 'SCROLL UP' ||
                  newConfigurationData.animationAction === 'SCROLL DOWN' ||
                  newConfigurationData.animationAction === 'SCROLL LEFT' ||
                  newConfigurationData.animationAction === 'SCROLL RIGHT' ||
                  newConfigurationData.animationAction === 'FADE OUT' ||
                  newConfigurationData.animationAction === 'FADE IN' ||
                  newConfigurationData.animationAction === 'ROTATE' ||
                  newConfigurationData.animationAction === 'SWAP') {
              this.config.animationAction = newConfigurationData.animationAction;
            } else {
              console.error(`config.animationAction must be either 'SCROLL UP', 'SCROLL DOWN', 'SCROLL LEFT', 'SCROLL RIGHT', 'FADE OUT', 'FADE IN', 'ROTATE', 'SWAP'`);
            }
          }
          // Reset
          this.resetAnimationConfig();
          this.animationConfig.reset = true;
        } catch (e) {
          console.error('Unable to parse configuration data:', e);
        }
      }
    });
  }

  public ngDoCheck() {
    if (this.config.animationAction === 'SCROLL UP' || this.config.animationAction === 'SCROLL DOWN') {
      this.calculatedRemainingImage = (this.config.height - (this.config.height * this.config.remainingImagePercentage / 100)) * -1;
    }

    if (this.config.animationAction === 'SCROLL LEFT' || this.config.animationAction === 'SCROLL RIGHT') {
      this.calculatedRemainingImage = (this.config.width - (this.config.width * this.config.remainingImagePercentage / 100)) * -1;
    }

    if (this.config.animationAction === 'FADE OUT' || this.config.animationAction === 'FADE IN') {
      this.calculatedRemainingImage = this.config.remainingImagePercentage > 0 ? this.config.remainingImagePercentage / 100 : 0;
    }

    if (this.config.animationAction === 'SWAP' && this.currentSwapImageText === '') {
      this.currentSwapImageText = _.get(this.config, 'imageText');
    }
  }

  private resetAnimationConfig() {
    this.animationConfig = {
      reset: false,
      scroll: {
        toggle: false,
        start: false,
        end: false,
      },
      fade: {
        toggle: false,
        start: false,
        end: false,
      },
      rotate: {
        toggle: false,
        start: false,
        end: false,
      },
      swap:  {
        toggle: false,
        start: false,
        end: false
      }
    }
  }

  public onSwapFadeOutComplete($event) {
    if (this.animationConfig.swap.toggle || this.animationConfig.swap.end || this.animationConfig.reset) {
      this.getSwapImage();
      this.resetAnimationConfig();
    }
  }
  
  public getSwapImage(): void {
    if (this.currentSwapImage === 'imageText') {
      this.currentSwapImageText = _.get(this.config, 'imageText2');
      this.currentSwapImage = 'imageText2';
    } else {
      this.currentSwapImageText = _.get(this.config, 'imageText');
      this.currentSwapImage = 'imageText';
    }
  }

  public getImage(): string {
    return _.get(this.config, 'imageText');
  }

  public ngOnDestroy() {
    this.realtime.unsubscribe(this.realtimeEventsSubscription);
  }

}
