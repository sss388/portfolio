'use client'

import React from 'react';
import {AppBar, Toolbar, Typography, useScrollTrigger} from "@mui/material";

const NavBar = () => {
    const scroll = useScrollTrigger({
        disableHysteresis: true, // 히스테리스 비활성화
        threshold: 0 // 스크롤 위치가 0일 때만 true 반환
    });

    return (
        <AppBar color={`${scroll ? 'primary' : 'transparent'}`}>
            <Toolbar>
                <Typography
                    noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'noto',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    SSS's Portfolio
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;