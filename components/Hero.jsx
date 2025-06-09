
'use client'

import React from 'react';

const Hero = () => {
    return (
        <>
            <section
                id="home"
                className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-[color:var(--background)] text-[color:var(--foreground)] pt-24"
            >
                <h1 className="text-5xl font-extrabold mb-4 tracking-tight max-w-3xl">
                    Hello, I'm a passionate <span className="text-[color:var(--accent)]">Software Engineer</span> student.
                </h1>
                <p className="text-lg sm:text-xl max-w-2xl mb-6 leading-relaxed">
                    I love building modern web applications and exploring new technologies like React, Node.js, and Next.js.
                    Constantly learning and improving, my goal is to create clean, efficient, and beautiful software solutions.
                </p>
                <p className="text-md max-w-2xl text-gray-600 dark:text-gray-400">
                    When I’m not coding, I enjoy reading tech blogs, experimenting with UI/UX design, and collaborating on open source projects.
                </p>
            </section>
        </>
    );
};

export default Hero;
