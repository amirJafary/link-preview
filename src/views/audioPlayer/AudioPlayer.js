import React, { useEffect, useState } from 'react';

import { SkipNext, SkipPrevious, PlayArrow, Pause, VolumeDown, VolumeUp } from '@material-ui/icons';
import sound1 from '../../audios/Amirhossein Eftekhari - Shookhi Shookhi (320).mp3'
import sound2 from '../../audios/aron_afshar_atre_bahar.mp3'
import sound3 from '../../audios/majid_razavi_negine_ghalbami.mp3'
import sound4 from '../../audios/majid_razavi_tala.mp3'
import sound5 from '../../audios/masih_arash_shakhe_nabat.mp3'
import sound6 from '../../audios/shadmehr_aghili_daaste_man_nist.mp3'
import ax1 from '../../images/autumn.jpg'
import ax2 from '../../images/pic.avif'
import ax3 from '../../images/radio-concept.jpg'
import ax4 from '../../images/rainy.jpg'
import ax5 from '../../images/summer.jpg'
import ax6 from '../../images/spring.jpg'
import './audio.scss'
import helper from '../../helper/helper';
import RangeSlider from '../components/RangeSlider';
import { useRef } from 'react';


const AudioPlayer = () => {

    const audioElem = useRef();
    const [autoPlay, setAutoPlay] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(100);
    const [duration, setDuration] = useState(0);
    const [currentTimeOfMusic, setCurrentTimeOfMusic] = useState(0);
    const [term, setTerm] = useState(1);
    const audios = [
        { id: 1, singer: 'Amirhossein Eftekhari', musicName: ' Shookhi Shookhi', image: ax1, music: sound1 },
        { id: 2, singer: 'aron afshar', musicName: ' atre_bahar', image: ax2, music: sound2 },
        { id: 3, singer: 'majid razavi', musicName: ' negine ghalbami', image: ax3, music: sound3 },
        { id: 4, singer: 'majid razavi', musicName: ' tala', image: ax4, music: sound4 },
        { id: 5, singer: 'masih arash', musicName: ' shakhe nabat', image: ax5, music: sound5 },
        { id: 6, singer: 'shadmehr aghili', musicName: ' daaste man nist', image: ax6, music: sound6 },
    ]

    const playHandler = () => {
        if (!playing) {
            audioElem.current.play();
            setPlaying(true);
        } else {
            audioElem.current.pause();
            setPlaying(false);
        }
    }

    useEffect(() => {
        setDuration(audioElem?.current?.duration);
    }, [audioElem?.current?.loadedmetadata, audioElem?.current?.readyState])

    useEffect(() => {
        setInterval(() => {
            setCurrentTimeOfMusic(audioElem?.current?.currentTime);
        }, 1000);
        if (audioElem?.current?.currentTime === audioElem?.current?.duration) {
            term < audios.length - 1 ? setTerm(term + 1) : setTerm(0)
            setAutoPlay(true)
        }
    }, [audioElem?.current?.loadedmetadata, audioElem?.current?.readyState, audioElem?.current?.currentTime])

    const volumeChanged = (e, newValue) => {
        let newestValue = newValue / 100
        audioElem.current.volume = newestValue;
        setVolume(newValue)
    }

    const currentTimeOfMusicChanged = (e, newValue) => {
        audioElem.current.currentTime = newValue
    }

    const skipClicked = (action) => {
        setAutoPlay(true);

        switch (action) {
            case 'next':
                term < audios.length - 1 ? setTerm(term + 1) : setTerm(0)
                break;
            case 'previous':
                term > 0 ? setTerm(term - 1) : setTerm(0)
                break;
            case 'plus':
                audioElem.current.currentTime = audioElem.current.currentTime + 5
                break;
            case 'minus':
                audioElem.current.currentTime = audioElem.current.currentTime - 5
                break;
            default:
                break;
        }
    }

    const selectedMusicChanged = (index) => {
        setTerm(index);
        setAutoPlay(true);
        setPlaying(true);
    }

    return (
        <div className='bgWallpaper flex-center justify-start'>
            <div className='grid grid-cols-12 gap-2 shadow-2xl w-7/12 items-strech bg-white rounded-2xl h-5/6 p-6 opacity-70'>

                <div className='w-auto items-center rounded-xl shadow-2xl p-4 col-span-7 justify-center'>
                    <audio ref={audioElem}
                        id='player'
                        autoPlay={autoPlay}
                        src={audios[term].music}
                        preload='metadata'></audio>
                    <img src={audios[term].image} className='w-96 h-52 rounded-t-lg mb-3' />
                    <div className=' mb-3 grid grid-cols-12 items-start gap-2'>
                        <div className='col-span-9'>
                            <RangeSlider className='w-full'
                                min={0}
                                max={audioElem?.current?.duration}
                                value={currentTimeOfMusic}
                                rangeSliderChanged={currentTimeOfMusicChanged} />
                            <div className='flex-center justify-between'>
                                <span>{helper.converSecondTominute(currentTimeOfMusic)}</span>
                                <span>{helper.converSecondTominute(duration)}</span>
                            </div>
                        </div>
                        <div className='flex-center col-span-3'>
                            <VolumeDown fontSize='inherit' className='text-black mr-1' />
                            <RangeSlider labelStatus='auto'
                                style={{ width: '50px' }}
                                value={volume}
                                rangeSliderChanged={volumeChanged} />
                            <VolumeUp fontSize='inherit' className='text-black ml-2' />
                        </div>
                    </div>
                    <div className='flex-center mb-3 text-xl'>
                        <div className='font-bold mr-1'>{audios[term].singer}</div>
                        <div> {`( ${audios[term].musicName} )`}</div>
                    </div>
                    <div className='flex-center'>
                        <button className='flex-center px-3 shadow-2xl bg-teal-600 text-white rounded-l-md mr-1'
                            onClick={() => skipClicked('minus')}>
                            -5 s
                        </button>
                        <button className='flex-center px-3 shadow-2xl bg-teal-600 text-lg rounded-l-md mr-1'
                            onClick={() => skipClicked('previous')}>
                            <SkipPrevious fontSize='inherit'
                                className='text-white' />
                        </button>
                        <button className='flex-center text-lg text-white rounded-full h-12 w-12 shadow-2xl bg-teal-800' onClick={playHandler}>
                            {playing
                                ? <Pause fontSize='inherit' className='text-white' />
                                : <PlayArrow fontSize='inherit' className='text-white' />
                            }
                        </button>
                        <button className='flex-center px-3 shadow-2xl bg-teal-600 text-lg rounded-r-md ml-1'
                            onClick={() => skipClicked('next')}>
                            <SkipNext fontSize='inherit'
                                className='text-white' />
                        </button>
                        <button className='flex-center px-3 shadow-2xl bg-teal-600 text-white rounded-r-md ml-1'
                            onClick={() => skipClicked('plus')}>
                            +5 s
                        </button>
                    </div>
                </div>
                <div className='col-span-5 rounded-2xl shadow-2xl  p-2 overflow-y-scroll'>
                    <ul className='p-0 m-0'>
                        {audios.map((music, index) =>
                            <li key={index} className='mb- grid grid-cols-12 justify-center items-center gap-2'
                                onClick={() => selectedMusicChanged(index)}>
                                <img src={music.image} className='w-16 h-12 rounded-lg col-span-4 m-3' />
                                <div className='col-span-8'>
                                    <div className='font-bold truncate-text'>{music.singer}</div>
                                    <div className='truncate-text'>{music.musicName}</div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AudioPlayer;