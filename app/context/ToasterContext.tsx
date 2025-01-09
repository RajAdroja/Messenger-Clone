'use client';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

const ToasterContext = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return <Toaster />;
};

export default ToasterContext;
