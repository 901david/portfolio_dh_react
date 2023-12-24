import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
    LandingBackground,
    LandingHeadshot,
    LandingHeadshotWrapper,
    LandingTagline,
    LandingSubTagline,
    IconWrapper
} from "./styled-components";

const HeadShotImage = "../../images/head_edited.jpg";

interface LandingProps {
    viewingMainContent: boolean;
    setMainContentBeingViewed: (isViewing: boolean) => void;
    setLandingViewed: (isViewing: boolean) => void;
}


export const Landing: React.FC<LandingProps> = ({
    viewingMainContent,
    setMainContentBeingViewed,
    setLandingViewed
}) => {
    const calledOnce = useRef(false);
    const handleArrowClick = () => {
        setMainContentBeingViewed(true);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            handleArrowClick();
        }
    };

    useEffect(() => {
        if (viewingMainContent) {
            /* 1 second represents the animation time which is triggered here. After the animation we never want to see the landing again. */
            const timer = setTimeout(() => {
                if (!calledOnce.current) {
                    calledOnce.current = true;
                    setLandingViewed(true);
                }
            }, 1002);

            return () => {
                clearTimeout(timer);
            }
        }
    }, [viewingMainContent]);

    return (
        <LandingBackground
            removeContentTriggered={viewingMainContent}
        >
            <LandingHeadshotWrapper onWheel={handleScroll}>
                <LandingTagline>David Hammond</LandingTagline>
                <LandingHeadshot src={HeadShotImage} alt="headshot" />
                <LandingSubTagline>Software Engineer</LandingSubTagline>
                <IconWrapper>
                    <FontAwesomeIcon onClick={handleArrowClick} icon={faChevronDown} />
                </IconWrapper>
            </LandingHeadshotWrapper>
        </LandingBackground>
    );
};

