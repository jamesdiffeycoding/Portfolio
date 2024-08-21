'use client';

import { useEffect, useState } from 'react';
import Card from './Card';
import Links from './Links';

async function checkUrl(url) {
    try {
        const response = await fetch(`/api/check-url?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        return data.valid; // true or false based on the API response
    } catch (error) {
        console.error('Error in checkUrl:', error);
        return false; // In case of network errors or other issues, return false
    }
}

export default function Overlay() {
    return (
        <section className="absolute z-10 top-0 w-full h-full flex flex-col align-center justify-between text-center items-center">
            <div className="flex align-center justify-center items-center w-full">
                <Links />
            </div>
            <section className="text-black h-full w-full text-left flex flex-col justify-center items-center">
                <Card
                    name="Awesun Solar Visualiser"
                    description="View the UK's latest solar energy production statistics"
                    features={['Fetch API', 'Weekly, monthly and yearly views', 'CSS Animations']}
                    url="https://awesun-solar-visualiser.vercel.app/"
                />
                <Card
                    name="Mathemagical"
                    description="View my latest Math projects: Calculapp, Spiraliser and Create"
                    features={['End-to-end testing', 'Keyboard hotkeys', 'Canvas Animations']}
                    url="https://mathemagical.vercel.app/"
                />
                <Card
                    name="Night Quizzer"
                    description="Create your own quizzes and test yourself"
                    features={['Authentication', 'Authorisation', 'Supabase/SQL backend']}
                    url="https://night-quizzer.vercel.app/yourspace"
                />
                <Card
                    name="Shelter Database"
                    description="View dummy data for an application built for a homeless shelter client"
                    features={['CRUD functionality', 'Authentication / Authorisation', 'Supabase/SQL backend']}
                    url="https://secure-nextjs-homeless-shelter-database.vercel.app/"
                />
            </section>
        </section>
    );
}
