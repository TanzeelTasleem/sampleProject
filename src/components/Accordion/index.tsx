import React, { useRef, useState } from 'react';
// import { appConfig } from '../../../../appConfig'

interface AccordionProps {
    title: React.ReactNode;
    content: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [active, setActive] = useState(false);
    const [height, setHeight] = useState('0px');
    const [rotate, setRotate] = useState('transform duration-700 ease');

    const contentSpace = useRef(null);

    function toggleAccordion() {
        setActive(active === false ? true : false);
        // @ts-ignore
        setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`);
        setRotate(
            active
                ? 'transform duration-700 ease'
                : 'transform duration-700 ease rotate-180'
        );
    }

    return (
        <div className="flex flex-col">
            <button
                className="py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
                onClick={toggleAccordion}
            >
                <p className="inline-block text-footnote light">{title}</p>
                {/* <img
          src={`${appConfig.publicUrl}/img/icons/chevron-up.svg`}
          alt="Chevron icon"
          className={`${rotate} inline-block`}
        /> */}
            </button>
            <div
                ref={contentSpace}
                style={{ maxHeight: `${height}` }}
                className="overflow-auto transition-max-height duration-700 ease-in-out"
            >
                <div className="pb-10">{content}</div>
            </div>
        </div>
    );
};
