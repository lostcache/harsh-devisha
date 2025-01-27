interface Project {
    title: string;
    description: string;
    link?: string;
    github?: string;
    bulletPoints?: string[];
}


export const projects: Project[] = [
    {
        title: "1Label",
        description: "Professional project developed during previous role. An ordering system for labels with advanced customization options.",
        link: "https://order.1-label.com/",
    },

    {
        title: "CV Generator",
        description: "Internal tool developed for company use. Streamlines the process of creating and managing professional CVs.",
        link: "https://cvgenerator.nexuslinkservices.com/login",
    },
    {
        title: "Sorting Visualizer",
        description: "Interactive visualization tool for sorting algorithms, built with TypeScript and React. A learning project that demonstrates algorithm implementation and animation techniques.",
        link: "https://visualizing-sorting-algorithms-54gw.onrender.com/",
        github: "https://github.com/lostcache/Visualizing-Sorting-Algorithms",
    },
    {
        title: "Battery RUC Estimation",
        description: "Advanced machine learning project focused on battery health prediction. Achieved MSE below 10% through:",
        github: "https://github.com/notsoharshdevisha/Battery-Remaining-Useful-Capacity-Estimation",
        bulletPoints : [
            "Preprocessing of 10GB+ EIS data",
            "Implementation of regression models and neural networks",
            "Optimization for accurate battery health estimation",
        ]
    },
    {
        title: "Signal Processing",
        description: "Signal processing project that achieved a 10% improvement in signal-to-noise ratio through:",
        github: "https://github.com/notsoharshdevisha/signal_processing",
        bulletPoints : [
            "Implementation of advanced 1-D and 2-D signal processing techniques",
            "Data quality enhancement methods",
            "Noise reduction algorithms",
        ]
    },
]
