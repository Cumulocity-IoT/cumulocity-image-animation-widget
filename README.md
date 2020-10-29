# Cumulocity IoT Image Animation widget
This is a runtime installable widget which can be added to your tenant using the [Application Builder](https://github.com/SoftwareAG/cumulocity-app-builder) (developed by Software AG Global Presales).


![Swap animation example](./example-gifs/swap-example.gif)
![Scroll animation example](./example-gifs/scroll-example.gif)


## Deploying the widget
To deploy the widget to your Cumulocity tenant

1. Download the latest version of this widget
2. Log into your Cumulocity tenant
3. If you do not have application builder installed, please follow the steps shown [here](https://github.com/SoftwareAG/cumulocity-app-builder)
4. If you have not yet created your application using the application Builder, please click on 'Application builder' and then click on 'Add application'
6. In your application, click on the 'More...' link on the right side of the screen
7. Click on 'Install widget'
8. Click on 'Choose File' and select the image animation "image-animation-widget.zip" which you have downloaded
9.   Click on the 'Upload' button to add the widget to you tenant

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

**Animation time** (in seconds)
Enter the amount of seconds the animation should take to complete e.g. 2. If you want the image to swap immediately, set this value to 0


## Animating the widget using Cumulocity events

### TOGGLE
If you have configured your widget, you will now be able to animate it by posting a (Basic Auth) authenticated Cumulocity TOGGLE event to your tenant.

#### *Cumulocity event*
https://\<**your cumulocity tenant url**\>/event/events

In the 'body' of your Cumulocity event, you will need to include the following: 

    {  
      source: The body should include the targeted device Id 
    
      type: "AnimationAction"
    
      text: "TOGGLE"
    
      time: [the current datetime]
    }

e.g. 

#### *Cumulocity event*
https://industrysolutions.cumulocity.com/event/events

POST:

    {
        "source": { "id": "31435268" },
        "type":"AnimationAction",
        "text": "TOGGLE",
        "time": "2020-10-29T09:16:22.598+02:00"
    }

The 'AnimationAction' (text = 'TOGGLE') Cumulocity event toggles the image according to the image animation configuration attributes.

### MANUAL ANIMATION

To manually toggle, you can post an authenticated Cumulocity event to your tenant. Set the "text" attribute to either "START" or "END"

#### START 
In the 'body' of your Cumulocity event, you will need to include the following: 

#### *Cumulocity event*
https://\<**your cumulocity tenant url**\>/event/events
	
    {  
      source: The body should include the targeted device Id 
    
      type: "AnimationAction"
    
      text: "START"
    
      time: [the current datetime]
    }

e.g. 

#### *Cumulocity event*
https://industrysolutions.cumulocity.com/event/events

POST:

    {
        "source": { "id": "31435268" },
        "type":"AnimationAction",
        "text": "START",
        "time": "2020-10-29T09:16:25.598+02:00"
    }

#### END
In the 'body' of your Cumulocity event, you will need to include the following: 

#### *Cumulocity event*
https://\<**your cumulocity tenant url**\>/event/events

    {  
      source: The body should include the targeted device Id 
    
      type: "AnimationAction"
    
      text: "END"
    
      time: [the current datetime]
    }

e.g. 

#### *Cumulocity event*
https://industrysolutions.cumulocity.com/event/events

POST:

    {
        "source": { "id": "31435268" },
        "type":"AnimationAction",
        "text": "END",
        "time": "2020-10-29T09:16:26.598+02:00"
    }


### RESET
At any time a 'RESET' Cumulocity event can be sent which will immediately position the image back to the original start position.

To reset the image, POST an authenticated Cumulocity event to your tenant.

In the 'body' of your Cumulocity event, you will need to include the following: 

#### *Cumulocity event*

https://\<**your cumulocity tenant url**\>/event/events

    {  
       source: The body should include the targeted device Id 
     
       type: "AnimationAction"
     
       text: "RESET"
          
       time: [the current datetime]
    }

e.g. 

#### *Cumulocity event*
https://industrysolutions.cumulocity.com/event/events

POST:

    {
        "source": { "id": "31435268" },
        "type":"AnimationAction",
        "text": "RESET",
        "time": "2020-10-29T09:27:25.598+02:00"
    }

    }

When the 'AnimationAction' (text = 'RESET') Cumulocity event is posted to your tenant, this will cause the image to be set back to the original position without any animation.



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
        "text": "{\"imageFile\":\"data:image/jpeg;base64,/9j/4AAQSkZJRg...\",\"height\":300,\"width\":500,\"remainingImagePercentage\":5,\"animationTimeInSeconds\":5,\"animationAction\":\"SCROLL LEFT\"}",
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

------------------------------

These tools are provided as-is and without warranty or support. They do not constitute part of the Software AG product suite. Users are free to use, fork and modify them, subject to the license agreement. While Software AG welcomes contributions, we cannot guarantee to include every contribution in the master project.
_____________________
For more information you can Ask a Question in the [TECHcommunity Forums](http://tech.forums.softwareag.com/techjforum/forums/list.page?product=cumulocity).

You can find additional information in the [Software AG TECHcommunity](http://techcommunity.softwareag.com/home/-/product/name/cumulocity).


