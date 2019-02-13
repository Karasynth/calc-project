## Welcome
Hello, my name is Shayne. Welcome to a small demo project that will showcase some of my skills in React/Redux.

### Assumptions
- Clearing will reset to 0
- Operators will be overwritten if two are pressed in a row
- I used mathJS to the calculation. If reliable code exists that meets the requirements, it would be a waste of time and testing to rewrite it

### Structure

I have seperated the app into 3 major folders; "actions", "components", and "store".
This structure works well for small to medium applications. For larger and infinitely scalable projects I would use a more modular structure to encase all of one modules important components, actions, reducers, and css.

### Actions

This folder hold all of our project Actions. These are simply functions to return the proper data to the store. Most actions take one or more arguments and will be futher handled in the recuder.

### Components

It is here that we keep all the building blocks for our UI. In the components folders we group components and their sub-compents into their own folder.

### Store

The store is the brain of our application. It will hold all the data of the curent state, as well as listen to dispatched actions and modify the state accordingly. This folder also holds all of our reducers.