import React from 'react';
import ReactDOM from 'react-dom';
import NavList from './NavList';
import { navListContent } from './navListContent';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import JobsList from './JobsList';
import { jobsListContent } from './jobsListContent';

import EducationList from './EducationList';
import { educationListContent } from './educationListContent';
import './styles/App.css';

ReactDOM.render(
    <div>
        <NavList navListContent={navListContent} />
        <main class="main">
            <JobsList jobsListContent={jobsListContent} navListContent={navListContent} />
            <EducationList educationListContent={educationListContent} navListContent={navListContent} />
        </main>
    </div>
    , document.getElementById('root'));