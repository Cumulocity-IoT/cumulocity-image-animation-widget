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


## Scrolling the widget using Cumulocity events

### SCROLL-TOGGLE
If you have selected 'Scroll up', 'Scroll down', 'Scroll left', or 'Scroll right', you will be able to scroll the image by posting an authenticated Cumulocity SCROLL-TOGGLE event to your tenant.

In the 'body' of your Cumulocity event, you will need to include the following: 

    {  
      source: The body should include the targeted device Id 
    
      type: "AnimationAction"
    
      text: "SCROLL-TOGGLE"
    
      time: [the current datetime]
    }

e.g. 

POST:

    {
        "source": { "id": "31435268" },
        "type":"AnimationAction",
        "text": "SCROLL-TOGGLE",
        "time": "2020-13-12T09:16:22.598+02:00"
    }

The 'AnimationAction' (text = 'SCROLL-TOGGLE') Cumulocity event works as a toggle to animate the image according to the image animation configuration attributes.

To manually toggle between the SCROLL-START and SCROLL-END, you can post an authenticated Cumulocity event to your tenant. Set the "text" attribute to either "SCROLL-START" or "SCROLL-END"


### FADE-TOGGLE
If you have selected 'Fade out' or 'Fade in', you will be able to fade the image by posting an authenticated Cumulocity FADE-TOGGLE event to your tenant.

In the 'body' of your Cumulocity event, you will need to include the following: 

    {  
      source: The body should include the targeted device Id 
    
      type: "AnimationAction"
    
      text: "FADE-TOGGLE"
    
      time: [the current datetime]
    }

e.g. 

POST:

    {
        "source": { "id": "31435268" },
        "type":"AnimationAction",
        "text": "FADE-TOGGLE",
        "time": "2020-13-12T09:16:22.598+02:00"
    }

The 'AnimationAction' (text = 'FADE-TOGGLE') Cumulocity event works as a toggle to animate the image according to the image animation configuration attributes.

To manually toggle between the FADE-START and FADE-END, you can post an authenticated Cumulocity event to your tenant. Set the "text" attribute to either "FADE-START" or "FADE-END"

### ROTATE-TOGGLE
If you have selected 'Rotate', you will be able to rotate the image by posting an authenticated Cumulocity FADE-TOGGLE event to your tenant.

In the 'body' of your Cumulocity event, you will need to include the following: 

    {  
      source: The body should include the targeted device Id 
    
      type: "AnimationAction"
    
      text: "ROTATE-TOGGLE"
    
      time: [the current datetime]
    }

e.g. 

POST:

    {
        "source": { "id": "31435268" },
        "type":"AnimationAction",
        "text": "ROTATE-TOGGLE",
        "time": "2020-13-12T09:16:22.598+02:00"
    }

The 'AnimationAction' (text = 'ROTATE-TOGGLE') Cumulocity event works as a toggle to animate the image according to the image animation configuration attributes.

To manually toggle between the ROTATE-START and ROTATE-END, you can post an authenticated Cumulocity event to your tenant. Set the "text" attribute to either "ROTATE-START" or "ROTATE-END"

### SWAP-TOGGLE
If you have selected 'Swap', you will be able to swap the images by posting an authenticated Cumulocity SWAP-TOGGLE event to your tenant.

In the 'body' of your Cumulocity event, you will need to include the following: 

    {  
      source: The body should include the targeted device Id 
    
      type: "AnimationAction"
    
      text: "SWAP-TOGGLE"
    
      time: [the current datetime]
    }

e.g. 

POST:

    {
        "source": { "id": "31435268" },
        "type":"AnimationAction",
        "text": "SWAP-TOGGLE",
        "time": "2020-13-12T09:16:22.598+02:00"
    }

The 'AnimationAction' (text = 'SWAP-TOGGLE') Cumulocity event works as a toggle to animate the image according to the image animation configuration attributes.

To manually toggle between the SWAP-START and SWAP-END, you can post an authenticated Cumulocity event to your tenant. Set the "text" attribute to either "SWAP-START" or "SWAP-END"

### RESET
At any time a 'RESET' Cumulocity event can be sent which will immediately position the image back to the original start position.

To reset the image, POST an authenticated Cumulocity event to your tenant.

In the 'body' of your Cumulocity event, you will need to include the following: 

    {  
       source: The body should include the targeted device Id 
     
       type: "AnimationAction"
     
       text: "RESET"
          
       time: [the current datetime]
    }

e.g. 

POST:

    {
        "source": { "id": "31435268" },
        "type":"AnimationAction",
        "text": "RESET",
        "time": "2020-13-12T09:16:25.598+02:00"
    }

    }

When the 'AnimationAction' (text = 'RESET') Cumulocity event is posted to your tenant, this will cause the image to be set back to the original position without any animation.



## Configuring the widget in real-time using Cumulocity events

All attributes for this widget can be amended in real-time.

To configure the widget, POST an authenticated Cumulocity event to your tenant

In the 'body' of your Cumulocity event, you will need to include the following:
(Note : in the text attribute, you do not need to include all the attributes)


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
        
        "time": "2020-10-12T09:16:22.598+02:00"
      }

**IMPORTANT**: in the text attribute, you will need to escape the double quotes with '\' characters to ensure that it is read in as stringified JSON. *This is shown in the example below.*

**TIP** : Use a website like [https://www.base64-image.de/](https://www.base64-image.de/) to encode your image files.

e.g.

POST:

    {
        "source": { "id": "32536261" },
        "type": "AnimationConfiguration",
        "text": "{\"imageFile\":\"data:image/jpeg;base64,/9j/4AAQSkZJRg...\",\"height\":300,\"width\":500,\"remainingImagePercentage\":5,\"animationTimeInSeconds\":5,\"animationAction\":\"SCROLL LEFT\"}",
        "time": "2020-13-08T17:16:27.598+02:00"
    }

As detailed above, the text attribute does not need to include all the configuration information. For example, to only change the animationAction and animationTimeInSeconds, you can send in those specific updates.

e.g.

POST:

    {
        "source": { "id": "32536261" },
        "type": "AnimationConfiguration",
        "text": "{\"AnimationAction\":\"SCROLL UP\",\"animationTimeInSeconds\":10}",
        "time": "2020-13-08T17:16:29.598+02:00"
    }

*  When the 'AnimationConfiguration' Cumulocity event is posted to your tenant, this will immediately update the configuration for your image. 

*  When the 'AnimationAction' Cumulocity event is posted to your tenant, this will cause the image to scroll using your updated attributes.

### Configuration Samples
A POSTMAN collection of sample configurations has been included in the /configuration-samples folder. Please import this into [https://www.postman.com/](https://www.postman.com/) and amend Basic Auth to include your username and password.

------------------------------

These tools are provided as-is and without warranty or support. They do not constitute part of the Software AG product suite. Users are free to use, fork and modify them, subject to the license agreement. While Software AG welcomes contributions, we cannot guarantee to include every contribution in the master project.
_____________________
For more information you can Ask a Question in the [TECHcommunity Forums](http://tech.forums.softwareag.com/techjforum/forums/list.page?product=cumulocity).

You can find additional information in the [Software AG TECHcommunity](http://techcommunity.softwareag.com/home/-/product/name/cumulocity).


