'use client'

import React from 'react';
import {Box, Card, Divider, Typography} from "@mui/material";
import {color} from "@mui/system";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import '@/public/frontskills/slide.css'
import {isUndefined} from "util";
const Skills = () => {
    const frontSkills :string[] =
        [
            'html', 'css', 'JavaScript', 'TypeScript', 'React', 'Redux', 'jQuery',
            'NextJs', 'Vue', 'vuex', 'Bootstrap', 'Mui', 'Vuetify', 'Tailwind-css',
            'ChartJs', 'Ckeditor5', 'Swiper', 'EmailJs'
        ];

    const slideCut = 7;

    return (
        <Box className="bg-blue-500 p-8 justify-center flex">
            <Box className="w-[1024px]">
                <Typography sx={{color: 'white',
                            textAlign: 'center',
                            fontFamily: 'Black Han Sans',
                            fontSize: '48px'}}
                >
                    <div className="justify-center flex">Skills</div>
                    <Divider color={'white'} className="mb-8"/>

                    <div className="text-left text-[28px]">
                        Frontend
                    </div>

                    <div className="p-4 flex items-center h-[150px] bg-white relative rounded-lg">
                        <Swiper navigation={true} modules={[Navigation]}>
                            {Array.from({length: Math.ceil(frontSkills.length/slideCut)}, (_, index) => (
                                <SwiperSlide className="gap-3">
                                    {Array.from({length: slideCut}, (_, index2) => {

                                        if(frontSkills.length <= index*slideCut + index2)
                                            return null;

                                        return (
                                            <img alt={`${frontSkills[index*slideCut + index2]}`}
                                                src={`/frontskills/${frontSkills[index*slideCut + index2]}.png`}
                                                className={`w-[100px]`}
                                            />
                                        )
                                    })}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </Typography>
            </Box>
        </Box>
    );
};

export default Skills;