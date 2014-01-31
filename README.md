#jQuery Floating Link

Very simple floating link. 

Just call the 

```javascript
$.jQueryFloatingLink("Back to top")
``` 

function and pass in the text you want in it.

If you want some options, you got 3. Just pass in a JavaScript object with the options you want.

| Option       | What it does                                                                    |
| ------------ | ------------------------------------------------------------------------------- |
| apears       | The amount of pixel to scroll before the link appears                           |
| fade         | How fast to fade in and out. Pass in fast or slow or the amount of milliseconds |
| animateToTop | How fast to animate to the top. Pass in the same stuff as fade, bruh.           |

##Example

```javascript
$.jQueryFloatingLink("Back to Top",
		{
			appears: 200,
			fade: "fast",
			animateToTop: 400
		}
	);
```

Style it however you want in the css. I don't even care. I'm not your mom.

I included a demo HTML file. Sorry it's so ugly.
 
Bye <3.