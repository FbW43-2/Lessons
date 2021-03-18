import React from 'react';
import BarBottom from './headerBars/barBottom';
import BarMiddle from './headerBars/barMiddle';
import BarTop from './headerBars/barTop';

const PageHeader = () => {
    return (
        <header id="header">
            <BarTop />
            <BarMiddle />
            <BarBottom />
        </header>
    );
};

export default PageHeader;