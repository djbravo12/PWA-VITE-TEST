const openNav = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
    closed: {
        opacity: 0,
        y: "-100%",
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const introH1 = {

    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: 'easeOut'
        }
    },
    hidden: {
        opacity: 0,
        x: -150
    }



}

const aboutParagraph = {

    hidden: { opacity: 0, y: -50 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeOut",
            // type: 'spring'
        }
    }
}

const aboutUlParentElement = {
    initial: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.5,
            // type: 'spring'
        }
    }
}

const aboutUlChildElements = {
    initial: {
        opacity: 0,
        x: -50,
    },
    visible: {
        opacity: 1,
        x: 0,
    },
};

const description = {
    hidden: { opacity: 0, x: -50 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
}



export { openNav, introH1, aboutParagraph, aboutUlParentElement, aboutUlChildElements, description }