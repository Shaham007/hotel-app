<!-- HOW I BUILD IT, THE FOLLOWING STEPS ARE: -->

1. Made a Header Component in which there is image slideshow carousel, I made it using bootstrap, added some pictures and made a change in size of the image carousel in App.css.

2. First thing is to make a skeleton of page, so i made a HotelCard Component which contain the Hotel Cards in which there is a structure of how the card should look and where to place texts and images which i have to get through Api.

3. Added styling and made it fully responsive with Media Querries.

4. Made a Main Component named as Container which will contain all of my other components, in this Container Component i Fetched the main data from Api using componentDidMount function, which contains Hotel Name, Adresses, Country, email, telephone, images and star ratings of hotels.

5. Made props to send all of my Api data from Container to HotelCard Component and in HotelCard i Fetched the 2nd Api to get the data of hotel room info, this info will contain the Adults and Children capacity, and description.

6. Adding all Api data to my Hotel Card, in image carousel i used map function to create the images of Hotels one by one, and mapping room capacity and room info and provided all other Api data.

7. Using map function in Container Component to map HotelCard Component.

8. Made Star buttons in Container Component and adding functionality by OnChange function on the main div which contains all of stars, functionality is that it filters the data from Api and changing HotelCard Component according to the filter selection.

9. Made SelectorButton Component which contains Adults and Children buttons to select number or adults and Childrens and adding functionality to these buttons.These buttons have onClick and onChange funtions which will increase and decrease the number od Adults and Children selected.