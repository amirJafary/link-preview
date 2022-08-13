import GearIcon from '@rsuite/icons/Gear';
import React from 'react';
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';
import '../../node_modules/rsuite/styles/index.less';


const RsuiteButtons = () => {
    return (
        <div>
            <ButtonToolbar className='flex items-center p-20 gap-4 flex-col'>
                <Button color="violet" appearance="primary">Violet</Button>

                <IconButton className='max-w-fit'
                    icon={<GearIcon icon="align-left" />}
                >
                    hello world
                </IconButton>
            </ButtonToolbar>
        </div>
    );
};

export default RsuiteButtons;