Prepping for the React Assessment

Booking Link https://go.oncehub.com/StructuredProgramFinalProjectReviews 




Are you error handling? What happens if your server is turned off - do you alert the user that their information did not save?

What is the difference between state and props
_PROPS are prop-erties of Components that can be passed in from parent relationships_
_STATE is associated with a component, and as an object carries all of mutable data the Component needs access to_
When do we use one over the other
_Component's state can change during lifecycles of Component, props are  fixed or immutable_
_Props are pass properties that can be nearly any type of data. They allow, in particular, presentational props, very reusable._
What is the difference between functional and class components
_A functional component returns JSX, instead of using a render method. It doesn't extend Component, so it hasn't inherited what is needed to store state. Functional components can still receive props, but notice above that they have to explicitly be written as the argument for the function._
When should you use which
_Presentational vs need for state_
Why do we use setState instead of just reassigning the state value
_Hey, you need to update state to this value when you have a chance. We need a way to distinguish initilizing state._
Why is setState async
_Async is helpful bc it allows for faster programming_
What is the virtual DOM
_It's all about the rebuild_
Is your application a SPA

What is the difference between client-side and server-side routing
Is there any connection between the two

How does client-side routing work
What components do we use from the react router library to set up client-side routing

What is Redux
Why would we use it

How do we set up redux
What components/functions do we use from the redux library

How do we give components access to the redux store

What is redux thunk middleware
When and why would we need it

What is the flow of your application
In what order do things happen

What is the difference between passing mapDispatchToProps vs. passing an object
How does connect handle these differently

What is the difference between mapStateToProps and mapDispatchToProps

What do we need in our application to enable components to access the redux store

What triggers a component to re-render

Does a re-render of a class component mean a NEW component object is created
Hint: does the constructor get invoked again on a re-render

What are the common lifecycle methods
In what order do lifecycle methods get invoked

When does componentDidMount get executed

Can we send data from a child component to a parent component

What do the terms container and presentational mean
Are these actually types of components

What is a reducer

How do we update the redux store

When/why would we pass a function to setState rather than an object

When we use the Link component, are we triggering a page refresh

What is an action creator

What is an action

What would happen if you call an action creator on it’s own rather than as a prop (i.e. addList(listObj) vs. this.props.addList(listObj))
Why is the behavior different


