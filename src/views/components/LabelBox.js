import React from 'react';

import { Card } from '@material-ui/core'

const LabelBox = (props) => {

    const { title, value, className, titleClassName, valueClassName } = props;
    return (
        <div>
            <Card raised={true} className={`p-4 grid ${className}`}>
                <div className={`text-left font-bold mb-4 ${titleClassName}`}>{title}</div>
                <div className={`text-center ${valueClassName}`}>{value}</div>
            </Card>
        </div>
    );
};

export default LabelBox;