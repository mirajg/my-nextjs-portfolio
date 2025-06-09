import React from 'react';

const Contact = () => {
    return (
        <div
            id="contact"
            className="flex items-center justify-center p-8"
            style={{ backgroundColor: 'var(--background)' }}
        >
            <div
                className="rounded-xl shadow-lg p-8 max-w-md text-center"
                style={{
                    background: 'var(--foreground)',
                    color: 'var(--background)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                }}
            >
                <h1 className="text-3xl font-bold mb-6">
                    Contact Info
                </h1>

                <p className="text-xl mb-2">
                    📞 Phone Number: <span className="font-mono text" style={{ color: 'var(--accent)' }}>+977 9708717409</span>
                </p>

                <p className="mb-4" style={{ color: 'var(--background)' }}>
                    📧 Email:{' '}
                    <a href="mailto:mirajgautam2050@gmail.com" className="hover:underline" style={{ color: 'var(--accent)' }}>
                        mirajgautam2050@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Contact;
