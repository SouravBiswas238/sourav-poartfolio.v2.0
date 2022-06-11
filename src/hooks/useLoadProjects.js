import React, { useEffect, useState } from 'react';

const useLoadProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('fakeProjects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return [projects];
};

export default useLoadProjects;