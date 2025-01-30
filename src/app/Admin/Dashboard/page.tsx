"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Blogadmin from '@/app/components/Blogadmin';
import Muitable from '@/app/components/Muitable';



export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className='max-w-7xl mx-auto md:my-20 my-5 container '>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example"
          >
            
            <Tab label=" Feedback" value="1" />
            <Tab label=" Blog" value="2" />
           
          </TabList>
        </Box>
        <TabPanel value="1"><Muitable/></TabPanel>
        <TabPanel value="2"><Blogadmin/></TabPanel>
        
      </TabContext>
    </Box>
   
    </div>
  );
}