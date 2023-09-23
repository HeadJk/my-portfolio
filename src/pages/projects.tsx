import Page from '@/components/Page';
import { Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

export type ProjectsPropTypes = {
    
}

/**
 * 
 *
 * @author [Jacob Head](https://github.com/HeadJk)
 */
const Projects = ({}: ProjectsPropTypes) => {
    return (
        <Page>
            <Typography variant='subtitle1'>Bounce Health Innovation Mobile App <GitHubIcon /></Typography>
        </Page>
    );
};

export default Projects;