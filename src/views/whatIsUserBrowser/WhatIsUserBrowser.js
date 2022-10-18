import React from 'react';

import chrome from '../../images/logos/chrome.png';
import firefox from '../../images/logos/firefox.png';
import edge from '../../images/logos/edge.png';
import opera from '../../images/logos/opera.png';
import safari from '../../images/logos/safari.png';
import helper from '../../helper/helper';

const WhatIsUserBrowser = () => {

    let userAgentData = navigator.userAgent;

    let browserInfos = navigator.userAgentData?.brands[1];
    console.log(browserInfos);

    const browsers = [
        { name: 'chrome', src: chrome, title: 'Google Chrome' },
        { name: 'firefox', src: firefox, title: 'Mozilla Firefox' },
        { name: 'edg', src: edge, title: 'Microsoft Edge' },
        { name: 'opera', src: opera, title: 'Opera' },
        { name: 'safari', src: safari, title: 'Apple Safari' },
    ];

    const browsersssssss = (name, title) => {
        if (!helper.isEmpty(browserInfos)) {
            return title === browserInfos?.brand && 'opacity-100'
        } else {
            return userAgentData.toLowerCase().includes(name) && 'opacity-100'
        }
    }

    return (
        <div className="flex-center flex-col h-full">
            <h2 className='mb-10'>Your Browser Is:</h2>
            <div className="flex-center">
                {browsers.map((item, index) =>
                    <>
                        {console.log(userAgentData)}
                        <img key={index}
                            className={`opacity-30 ${browsersssssss(item.name, item.title)} mx-3`}
                            src={item.src}
                            alt={item.name}
                            title={item.title} />
                    </>
                )}
            </div>
        </div>
    );
};

export default WhatIsUserBrowser;