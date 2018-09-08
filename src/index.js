import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';

import NavList from './NavList';
import { navListContent } from './navListContent';

import JobsList from './JobsList';
import { jobsListContent } from './jobsListContent';

import EducationList from './EducationList';
import { educationListContent } from './educationListContent';

import Social from './Social';

ReactDOM.render(
    <div>
        <NavList navListContent={navListContent} />
        <main className="main">
            <JobsList jobsListContent={jobsListContent} navListContent={navListContent} />
            <EducationList educationListContent={educationListContent} navListContent={navListContent} />
        </main>
        <Social />
    </div>
    , document.getElementById('root'));