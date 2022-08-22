import React from 'react';

import { Card } from '@material-ui/core'

const LabelBox = (props) => {

    const { title, value } = props;
    return (
        <div>
            <Card className='p-2 flex flex-col'>
                <div className='text-left font-bold'>{title}</div>
                <div className='text-center text-lg'>{value}</div>
            </Card>
        </div>
    );
};

export default LabelBox;