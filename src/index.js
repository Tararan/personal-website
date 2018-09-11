import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';

import NavList from './NavList';
import { navListContent } from './navListContent';

import JobsList from './JobsList';
import { jobsListContent } from './jobsListContent';

import SummaryList from './SummaryList';
import { summaryListContent } from './summaryListContent';

import SocialList from './SocialList';
import { socialListContent } from "./socialListContent";

import SkillsList from './SkillsList';
import { skillsListContent } from "./skillsListContent";


ReactDOM.render(
    <div>
        <NavList navListContent={navListContent} />
        <main className="main">
        <SummaryList summaryListContent={summaryListContent} navListContent={navListContent} />
            <JobsList jobsListContent={jobsListContent} navListContent={navListContent} />
            <SkillsList skillsListContent={skillsListContent} navListContent={navListContent} />
        </main>
        <SocialList socialListContent={socialListContent} />
    </div>
    , document.getElementById('root'));