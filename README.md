# Cumulocity IoT Image Animation widget[<img width="35" src="https://user-images.githubusercontent.com/67993842/97668428-f360cc80-1aa7-11eb-8801-da578bda4334.png"/>](https://github.com/SoftwareAG/cumulocity-image-animation-widget/releases/download/1.0.0/image-animation-widget.zip)


![Swap animation example](./example-gifs/swap-example.gif)
![Scroll animation example](./example-gifs/scroll-example.gif)


## Features
**Scroll Left:** Animate an image such as a gate to scroll left

**Scroll Right:** Animate an image such as a gate to scroll right

**Scroll Up:** Animate an image such as a garage door to scroll upwards 

**Scroll Down:** Animate an image to scroll down

**Fade In:** Fade a hidden image into view

**Fade Out:** Fade an image out of view

**Rotate:** Rotate an image 

**Swap:** Swap one image with another image

## Installation

### Runtime Widget Deployment?

* This widget supports runtime deployment. Download the [Runtime Binary](https://github.com/SoftwareAG/cumulocity-image-animation-widget/releases/download/1.0.0/image-animation-widget.zip).

# Deploying the widget
To deploy the widget to your Cumulocity tenant

1. Download the latest version of this widget
2. Log into your Cumulocity tenant
3. If you do not have application builder installed, please follow the steps shown [here](https://github.com/SoftwareAG/cumulocity-app-builder)
4. If you have not yet created your application using the application Builder, please click on 'Application builder' and then click on 'Add application'
6. In your application, click on the 'More...' link on the right side of the screen
7. Click on 'Install widget' and follow the instructions

# Deployment - as part of the Cumulocity IoT Cockpit application
1. Clone the repository on your local machine using `git clone https://github.com/SoftwareAG/cumulocity-image-animation-widget.git`.
2. Run `npm install` to install the module dependencies.
3. Run `c8ycli build` to build the cockpit application.
4. Run `c8ycli deploy` and follow the instructions to deploy the cockpit application on your tenant. This will include the widget also.

## Adding the widget to your dashboard
1. To add the widget to your dashboard, click on your application and select the 'Add Widget' link at the top of the screen
2. Scroll down and select the 'Image animation' widget
3. See the next section for widget configuration details
 

## Configuring the Widget through your Cumulocity tenant
The widget configuration page contains a number of configuration attributes. These attributes are dependent upon the 'Animation type' which is selected

### Animation type: Scroll up, Scroll down, Scroll left, Scroll right

**Image file**
	Select the image file which you want to use in the widget. The file type must be either a .png, .jpeg or .jpg.
	
**Height** (in pixels)
Enter the height (in pixels) for your image e.g. 300

**Width** (in pixels)
Enter the width (in pixels) for your image e.g. 500

**AnimationActionOn**
Enter the event type which will animate the image from the scroll start to the scroll end position

**AnimationActionOff**
Enter the event type which will animate the image from the scroll end to the scroll start position

**Remaining image** (in percentage)
Enter the amount of image (as a percentage) which should remain on the screen. If you want the whole image to completely animate off the screen, set this value to 0

**Animation time** (in seconds)
Enter the amount of seconds the animation should take to complete e.g. 2. If you want the image to scroll immediately, set this value to 0


### Animation type: Fade in, Fade out

**Image file**
	Select the image file which you want to use in the widget. The file type must be either a .png, .jpeg or .jpg.
	
**Height** (in pixels)
Enter the height (in pixels) for your image e.g. 300

**Width** (in pixels)
Enter the width (in pixels) for your image e.g. 500

**AnimationActionOn**
Enter the event type which will animate the image from the fade start to the fade end position

**AnimationActionOff**
Enter the event type which will animate the image from the fade end to the fade start position

**Remaining image** (in percentage)
Enter the amount of image (as a percentage) which should remain on the screen. If you want the whole image to completely fade in or out, set this value to 0

**Animation time** (in seconds)
Enter the amount of seconds the animation should take to complete e.g. 2. If you want the image to fade immediately, set this value to 0


### Animation type: Rotate

**Image file**
	Select the image file which you want to use in the widget. The file type must be either a .png, .jpeg or .jpg.
	
**Height** (in pixels)
Enter the height (in pixels) for your image e.g. 300

**Width** (in pixels)
Enter the width (in pixels) for your image e.g. 500

**AnimationActionOn**
Enter the event type which will animate the image from the rotate start to the  rotate end position

**AnimationActionOff**
Enter the event type which will animate the image from the rotate end to the rotate start position

**Rotation** (in degrees)
Enter the amount of degrees the image should rotate. The valid range is -360 to 360. 
To invert the image forwards, enter 180. To invert the image backwards, enter -180

**Animation time** (in seconds)
Enter the amount of seconds the animation should take to complete e.g. 2. If you want the image to rotate immediately, set this value to 0

### Animation type: Swap

**From image file**
	Select the image file which you want to animate from. The file type must be either a .png, .jpeg or .jpg.

**To image file**
	Select the image file which you want to animate to. The file type must be either a .png, .jpeg or .jpg.
	
**Height** (in pixels)
Enter the height (in pixels) for your images e.g. 300

**Width** (in pixels)
Enter the width (in pixels) for your images e.g. 500

**AnimationActionOn**
Enter the event type which will animate the image from the the first image to the second image

**AnimationActionOff**
Enter the event type which will animate the image from the second image to the first image

**Animation time** (in seconds)
Enter the amount of seconds the animation should take to complete e.g. 2. If you want the image to swap immediately, set this value to 0


## Animating the widget using Cumulocity events

### Toggling
If you have configured your widget, you will now be able to animate it by posting a (Basic Auth) authenticated Cumulocity **AnimationActionToggle** event to your tenant.

#### *Cumulocity event*
https://\<**your cumulocity tenant url**\>/event/events

In the 'body' of your Cumulocity event, you will need to include the following: 

    {  
      source: The body should include the targeted device Id 
    
      type: "AnimationActionToggle"
    
      text: ""
    
      time: [the current datetime]
    }

e.g. 

#### *Cumulocity event*
https://industrysolutions.cumulocity.com/event/events

POST:

    {
        "source": { "id": "31435268" },
        "type":"AnimationActionToggle",
        "text": "",
        "time": "2020-10-29T09:16:22.598+02:00"
    }

The 'AnimationActionToggle' Cumulocity event toggles the image according to the image animation configuration attributes.

### MANUAL ANIMATION

To manually toggle, you can post an authenticated Cumulocity event to your tenant. Set the "text" attribute to ""

#### Animating from the start position to the end position
In the 'body' of your Cumulocity event, you will need to include the following: 

#### *Cumulocity event*
https://\<**your cumulocity tenant url**\>/event/events
	
    {  
      source: The body should include the targeted device Id 
    
      type: "<This will be your animationActionOn value>"
    
      text: ""
    
      time: [the current datetime]
    }

e.g. 

#### *Cumulocity event*
https://industrysolutions.cumulocity.com/event/events

POST:

    {
        "source": { "id": "31435268" },
        "type":"StartWatering",
        "text": "",
        "time": "2020-10-29T09:16:25.598+02:00"
    }

#### Animating from the end position to the start position
In the 'body' of your Cumulocity event, you will need to include the following: 

#### *Cumulocity event*
https://\<**your cumulocity tenant url**\>/event/events

    {  
      source: The body should include the targeted device Id 
    
      type: "<This will be your animationActionOff value>"
    
      text: ""
    
      time: [the current datetime]
    }

e.g. 

#### *Cumulocity event*
https://industrysolutions.cumulocity.com/event/events

POST:

    {
        "source": { "id": "31435268" },
        "type":"StopWatering",
        "text": "",
        "time": "2020-10-29T09:16:26.598+02:00"
    }


### Resetting the animation
At any time a 'AnimationActionReset' Cumulocity event can be sent which will immediately position the image back to the original start position.

To reset the image, POST an authenticated Cumulocity event to your tenant.

In the 'body' of your Cumulocity event, you will need to include the following: 

#### *Cumulocity event*

https://\<**your cumulocity tenant url**\>/event/events

    {  
       source: The body should include the targeted device Id 
     
       type: "AnimationActionReset"
     
       text: ""
          
       time: [the current datetime]
    }

e.g. 

#### *Cumulocity event*
https://industrysolutions.cumulocity.com/event/events

POST:

    {
        "source": { "id": "31435268" },
        "type":"AnimationActionReset",
        "text": "",
        "time": "2020-10-29T09:27:25.598+02:00"
    }

    }

When the 'AnimationAction' (text = '') Cumulocity event is posted to your tenant, this will cause the image to be set back to the original position without any animation.



## Configuring the widget in real-time using Cumulocity events

All attributes for this widget can be amended in real-time.

To configure the widget, POST an authenticated Cumulocity event to your tenant

In the 'body' of your Cumulocity event, you will need to include the following:
(Note : in the text attribute, you do not need to include all the attributes)

#### *Cumulocity event*
https://\<**your cumulocity tenant url**\>/event/events

    {
      source: The body should include the targeted device Id 
      
      type: "AnimationConfiguration"
      
      text: {
      
        imageText: The base64 encoded image file string ( you can generate this using https://www.base64-image.de/ and copy / pasting the image using the 'copy image' button on the website)

        imageText2: The base64 encoded 'To Image' file string ( you can generate this using https://www.base64-image.de/ and copy / pasting the image using the 'copy image' button on the website). Note that this attribute is only required for the 'SWAP' Animation action.
                
        height: the height of your image (in pixels)

        width: the width of your image (in pixels)

		animationActionOn: The event type to move the animation from the start position to the end position

		animationActionOff: The event type to move the animation from the end position to the start position

        animationTimeInSeconds: The amount of time taken to complete the animation.

        remainingImagePercentage: The amount of the image that should remain visible once it has been scrolled out of view

        rotationInDegress: The amount of the degrees an image should rotate. Note that this attribute is only required for the 'ROTATE' Animation action.

        AnimationAction: "SCROLL UP", "SCROLL DOWN", "SCROLL LEFT", "SCROLL RIGHT", "FADE OUT", "FADE IN", "ROTATE", "SWAP"
        
        "time": "2020-10-29T09:16:30.598+02:00"
      }

**IMPORTANT**: in the text attribute, you will need to escape the double quotes with '\' characters to ensure that it is read in as stringified JSON. *This is shown in the example below.*

**TIP** : Use a website like [https://www.base64-image.de/](https://www.base64-image.de/) to encode your image files.

e.g.

#### *Cumulocity event*
https://industrysolutions.cumulocity.com/event/events

POST:

    {
        "source": { "id": "32536261" },
        "type": "AnimationConfiguration",
        "text": "{\"imageFile\":\"data:image/jpeg;base64,/9j/4AAQSkZJRg...\",\"height\":300,\"width\":500,\"remainingImagePercentage\":5,\"animationTimeInSeconds\":5,\"animationAction\":\"SCROLL LEFT\",\"animationActionOn\":\"Open\",\"animationActionOff\":\"Close\"}",
        "time": "2020-10-29T09:28:38.598+02:00"
    }

As detailed above, the text attribute does not need to include all the configuration information. For example, to only change the animationAction and animationTimeInSeconds, you can send in those specific updates.

e.g.

#### *Cumulocity event*
https://industrysolutions.cumulocity.com/event/events

POST:

    {
        "source": { "id": "32536261" },
        "type": "AnimationConfiguration",
        "text": "{\"AnimationAction\":\"SCROLL UP\",\"animationTimeInSeconds\":10}",
        "time": "2020-10-29T10:02:22.598+02:00"
    }

*  When the 'AnimationConfiguration' Cumulocity event is posted to your tenant, this will immediately update the configuration for your image. 

*  When the 'AnimationAction' Cumulocity event is posted to your tenant, this will cause the image to scroll using your updated attributes.

### AnimationAction & Real-time configuration samples
A POSTMAN collection of AnimationAction and realtime configuration samples has been included in the /configuration-samples folder. Please import this into [https://www.postman.com/](https://www.postman.com/)

1. Ensure that the Image Animation Widget has been installed into your tenant and added to your dashboard
2. Amend the Basic Auth to include your username and password
3. Replace 'industrysolutions.cumulocity.com' in the url to your tenant 
4. Run the TOGGLE event (in the AnimationAction folder) to see your widget animate in your tenant

### Development - to enhance and test this widget in your local environment
1. Clone the repository on your local machine using `git clone https://github.com/SoftwareAG/cumulocity-image-animation-widget.git`.
2. Run `npm install` to download the module dependencies.
3. Run `c8ycli server -u https://your_tenant_url` to start the server.
4. Go to `http://localhost:9000/apps/cockpit/` in the browser to view and test your changes.
5. (Optional) push the changes back to this repository.

### Build - to create a new build of the image-animation widget for the Runtime Widget Loader
1. Finish the development and testing on your local machine.
2. Run `gulp` to start the build process.
3. Use the `image-animation-widget.zip` file in the `dist` folder as your distribution file.

------------------------------

This widget is provided as-is and without warranty or support. They do not constitute part of the Software AG product suite. Users are free to use, fork and modify them, subject to the license agreement. While Software AG welcomes contributions, we cannot guarantee to include every contribution in the master project.
_____________________
For more information you can Ask a Question in the [TECHcommunity Forums](http://tech.forums.softwareag.com/techjforum/forums/list.page?product=cumulocity).

You can find additional information in the [Software AG TECHcommunity](http://techcommunity.softwareag.com/home/-/product/name/cumulocity).


