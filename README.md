# rick-and-morty-app

# Recap 1

## Exercise

- Create your app using create-react-app
- There should be a page that displays a list of photos in the following path `/photos`
- There should be a page that displays a single photo in the following path `/photos/:id`
- When the user clicks on a photo in `/photos` the app should take the user to `/photos/:id`
- you can also use another photo-like api: like this one about [Rick & Morty](https://rickandmortyapi.com/)

### Notes

- To fetch photos use [http://jsonplaceholder.typicode.com/photos?_limit=30](http://jsonplaceholder.typicode.com/photos?_limit=30). Don't forget the `_limit=30` parameter at the end of the query or it will be slow.
- To fetch a single photo use [http://jsonplaceholder.typicode.com/photos/<PHOTO_ID>](http://jsonplaceholder.typicode.com/photos/3)
- User react-router v4 for the routing ```yarn add react-router-dom``` or ```npm install --save react-router-dom```
- This is not a master detail page. It's more simple than the Messenger app

## Bonus

- Using this endpont [http://jsonplaceholder.typicode.com/posts](http://jsonplaceholder.typicode.com/posts), create a page that displays a list of posts in the following path: /posts
- Add a form at the top of the page to add a new post. This url [http://jsonplaceholder.typicode.com/posts](http://jsonplaceholder.typicode.com/posts) also accepts the verb "POST" to add a new post
- if you use the Rick & Morty API, you can add a [filter](https://rickandmortyapi.com/documentation/#filter-characters) of the characters list
- you can specify a NOT_FOUND route in the Root of your app. (`<Route component={NotFound} />`)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
