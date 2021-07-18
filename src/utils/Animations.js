export const fadeLeft = {
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
    hidden: { opacity: 0, x: 100 },
};

export const fadeLeftWithDelay = {
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            delay: 1,
        },
    },
    hidden: { opacity: 0, x: 100 },
};

export const fadeIn = {
    visible: {
        opacity: 1,
        transition: {
            duration: 0.7,
            delay: 0.8,
        },
    },
    hidden: { opacity: 0 },
};

export const fadeInWithDelay = {
    visible: {
        opacity: 1,
        transition: {
            duration: 0.7,
            delay: 1.3,
        },
    },
    hidden: { opacity: 0 },
};

export const fadeLeftWithDelaySidebar = {
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1.5,
            delay: 0.8,
        },
    },
    hidden: { opacity: 0, x: 20 },
};
