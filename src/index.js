import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { content } from './content';
import JobsList from './JobsList';

ReactDOM.render(
    <JobsList content = { content }/>,
    document.getElementById('root'));
registerServiceWorker();
