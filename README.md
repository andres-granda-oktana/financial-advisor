# Financial Advisor APP

# Demo
https://google.com/

## Description :clipboard:
> A financial advisor asks user for their risk preference (1 being very risk averse, and 10 being insensitive to risk)
> Recommend a portfolio based on user preference
> Ask user for how much money they currently have allocated to each of the 5 investment categories. This is requested in $ (not a %)
> If the user's current allocation is not ideal for their risk level, the financial advisor recommends an allocation transference to correspond with suggested allocation.


## Installation :wrench:

1. Clone this repo by running `git clone https://github.com/`
2. `cd financial-advisor`
3. `npm install`

## Run app in development mode :wrench:

1. `npm run dev`
2. Open app on [http://localhost:3000](http://localhost:3000)

## Run app in production server :wrench:

1. `npm run build`
2. `npm run start`
3. Open app on [http://localhost:3000](http://localhost:3000)

<!-- ## Useful Links: :link:

1. [Next JS Docs](https://nextjs.org/learn/basics/getting-started/setup) -->

## Instructions :point_right:

## Branches Information :point_right:

1. [simple-nextjs-app](https://githubSimple next js app
2. [express-with-next)](https://github.com/imranhsayed/next-js-app/tree/express-with-next)) Simple next js app with custom express server
3. [express-with-next-ssr)](https://github.com/imranhsayed/next-js-app/tree/express-with-next-ssr)) Custom end point by creating express server, and displaying clean URL for single post ( `'/post/slug' instead of '/post?id=22'` )
3. [shared-component-navigation](https://github.com/imranhsayed/next-js-app/tree/shared-component-navigation) Example to show navigation and Creating Layout Component that can be shared between multiple component.
4. [dynamic-page-query-string](https://github.com/imranhsayed/next-js-app/tree/dynamic-page-query-string) Example to create dynamic post pages by extracting query string from url using `withRouter`
5. [route-masking](https://github.com/imranhsayed/next-js-app/tree/route-masking) Example to show a different URL on the browser than the actual URL that your app sees by adding "as" props to the link.

## [Custom Express Configuration with next js](https://github.com/imranhsayed/next-js-app/tree/express-with-next)

```ruby
const express = require( 'express' );
const next = require( 'next' );

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next( { dev } );
const handle = app.getRequestHandler();

/**
 * app (next js ) will prepare our server with express, and then,
 * wrap express application inside next
 *
 */
app.prepare()
	.then( () => {
		const server = express();

		/**
		 * This will override the default '/about' next js route and when user goes to '/about'
		 * it will serve index.js because route '/' which we are rendering in app.render() belongs to index.js
		 */
		server.get( '/about', ( req, res ) => {
			return app.render( req, res, '/' );
		} );

		/**
		 * Wrapping express app inside next will allow us to create routes by using
		 * express js function inside of the next js build
		 *
		 * '*' means all routes which are not explicit , use this route for them.
		 */
		server.get( '*', ( req, res ) => {
			return handle( req, res );
		} );

		server.listen( port, ( err ) => {
			if ( err ) {
				throw err;
			}
			console.warn( `Ready on http://localhost:${port}` );
		} );
	} );
```
## Built With :zap:

1. React
3. Redux
4. Fundation CSS
2. Next JS
5. React Google Charts
## Author :bust_in_silhouette:

* **[Andrés Granda - Oktana](https://github.com/andres-granda-oktana)**

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**