import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { content } from './content';
import NavList from './NavList';
import { navListItems } from './navListItems';
import JobsList from './JobsList';

ReactDOM.render(
    <div>
        <NavList navListItems={navListItems} />
        <JobsList content={content} />
    </div>
    , document.getElementById('root'));
registerServiceWorker();
