1. create routes home, favourites, details with dynamic route /recipe-item/:id

2. create a navbar with outlet in the APP comeponent to dybnamically display the home , favourite , details content

3. create a global context

- create context
- provide context
- consume context / use context

4. create search compoennt in the navbar

5. now in global context create searchParam state and use this context to dynamically get the data

6. also fetch the receipe data using the search param and display the data in the homepage , tip. create a receipeItem.jsx which can be use later

7. now create dynamic link for receipe-item:id in the receipeItem which will take you to the details page

e.g. <Link
to={`/recipe-item/${item?.id}`} >

8. in details page use this id to create a individual data

9. create favourite state and handleAddToFavourite

10. create a favourites page
