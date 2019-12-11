# 10-Template-Engine-Employee-Summary
npm cli program that takes in info from the user to generate an html page to illustrate the team they've assembled.


## Current roadblock
I can't seem to get the employeeRoster available to team.html.
Origionally to do this I made a couple htmlP# that would build the page as a template literal. I took this approach because I did it last assignment and It seemed to do ok. I then realized that Looping over an array and generating html from that was harder than I expected. 
So I went back to the drawing board. I wanted to generate the page as a template literal again, but this time I would include the employeeRoster as an array in a script tag at the end of the html. From there I would have a loop that adds each member to the page using jquery. Now that sounds ok the problem is I cant get the employeeRoster array into the team.html page. I've tried stringifying the object to see if maybe it was because template literals don't work well with objects, but every time I just get an empty array.

I don't think I can justify spending more time trying to fix this. I'd love to get it working but I need to start working on the next assignment.
