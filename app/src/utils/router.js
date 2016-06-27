import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from '../store/store';
import App from '../components/App';
import * as Containers from '../containers/';
import ReduxToastr from 'react-redux-toastr';

const router = (
  <Provider store={store}>
    <div>
      <ReduxToastr
        timeOut={4000}
        newestOnTop
        position="bottom-right"
      />
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Containers.LandingPage} />
          {/* Examples of routes here.
          <Route path="/portfolio" component={Containers.Portfolio} />
          <Route path="/projects/:projectId" component={Containers.SingleProjectContainer} />
          <Route path="/contact" component={Containers.Contact} />
          <Route path="/blog" name="PostListView" component={Containers.PostListView} />
          <Route path="/blog/posts/:postId" name="SinglePostView" component={Containers.SinglePostView} />
          <Route path="/resume/view" name="ResumeViewer" component={Containers.ResumePDF} />*/}
          <Route path="*" component={Containers.NotFound} />
        </Route>
      </Router>
    </div>
  </Provider>
);

export default router;