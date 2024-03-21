"use client"
import React, { useState } from 'react';

function Header() {
    const [title] = useState('My App Header');

    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}

export default Header;