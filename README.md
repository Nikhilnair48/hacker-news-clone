## Hacker News Clone

A clone of the popular news feed for technology enthusiasts, Hacker News.

### Implemented features

- Fetch news from [Algolia](https://hn.algolia.com/api)
- Permit user to navigate between pages
- Permit user to upvote and hide posts
- Display a linear chart to showcase the post ID (x-axis) to upvotes (y-axis) ratio on a given page
- Persist user actions locally

### Applicable Technologies

- **react** for component rendering
- **redux** for state management
- **redux-sagas** to handle actions emitted by React components
- **redux-persist** for data persistence
- **react-charts** to create the linear chart
- **moment** to appropriately format the date of any given post
- **webpack** to bundle the application
- **jest** & **enzyme** to write tests
- **Docker** for containerization
- **AWS Amplify** for continuous deployment

### Run locally

- git clone git@github.com:Nikhilnair48/hacker-news-clone.git
- cd hacker-news-clone
- npm i && npm start

### Run tests

- npm run test
