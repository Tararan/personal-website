import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import NavList from './NavList';
import { navListContent } from './navListContent';

import JobsList from './JobsList';
import { jobsListContent } from './jobsListContent';

import EducationList from './EducationList';
import { educationListContent } from './educationListContent';

ReactDOM.render(
    <div>
        <NavList navListContent={navListContent} />
        <JobsList jobsListContent={jobsListContent} navListContent={navListContent}  />
        <EducationList educationListContent={educationListContent} />
    </div>
    , document.getElementById('root'));
registerServiceWorker();
