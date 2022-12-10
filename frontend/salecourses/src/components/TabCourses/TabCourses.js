import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ScrollableTabsButtonAuto() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // make the tabs go to the center
    const styles = {
        display: 'flex',
        justifyContent: 'center-between',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 'calc(10px + 2vmin)',
        textAlign: 'center',
        BackgroundColor:  '#282c34',
    };

    return (
        <Box sx={{ maxWidth: { xs: 320, sm: 1080 }, bgcolor: 'background.paper' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                style={styles}
            >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
                <Tab label="Item Four" />
                <Tab label="Item Five" />
                <Tab label="Item Six" />
                <Tab label="Item Seven" />
            </Tabs>
        </Box>
    );
}