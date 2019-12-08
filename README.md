Hi and thanks for downwloading this project

to start this project no first need to download it. either download the zip or clone it in your ide.

when downloaded you need to open a terminal and CD into the Bits_Bots-master folder

when you have done that you need to run a "npm install" command to download for the packages

when the packages have downloaded run the "npm start" command to initiate.

the project should open on you localhost3000

known error is the video on the login and register page.

download the video here https://drive.google.com/file/d/1DUX8eFbCMNEvKfnFS2wrRjN9xnzi7hnz/view?usp=sharing 
when downloaded plase it in the "assets" folder inside the src folder of the project

or

remove them by going into the src folder and into the conmpnents folder you should find a Login.js file and a register.jsx file

in the login file, remove the import video from '../assets/fast-background-video.mp4' in line 5 and remove the entire <video src={video} poster={posterimg} autoPlay={true} loop={true} >
        </video> element on line 41-42
        
then we need to remove the same from the register page
go to the register.jsx 
remove the video inport on line 5 and the video html element on line 18-19
        
