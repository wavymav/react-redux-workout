export { PostsIndex } from './posts-index'

import React, { Component } from 'react';

export const App = ({ children }) => (
  <div>
    <div>Header</div>
    { children }
    <div>Footer</div>
  </div>
)
