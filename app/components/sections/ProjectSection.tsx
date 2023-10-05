'use client'

import React from 'react';
import {Box, Divider, Typography} from "@mui/material";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import '@/public/projects/slide.css'

const ProjectSection = () => {
    return (
        <Box className="bg-lime-200 p-8 justify-center flex h-[1000px]">
            <Box className="w-[1024px]">
                <Typography sx={{color: 'black',
                    textAlign: 'center',
                    fontFamily: 'Black Han Sans',
                    fontSize: '48px'}}
                >
                    Projects
                </Typography>
                <Divider color={'black'} className="mb-8 opacity-25"/>
                <Box className="h-[800px] rounded-xl overflow-hidden">
                    <Swiper navigation={true} modules={[Navigation]}>
                        <SwiperSlide>1</SwiperSlide>
                        <SwiperSlide>2</SwiperSlide>
                    </Swiper>
                </Box>
            </Box>
        </Box>
    );
};

export default ProjectSection;