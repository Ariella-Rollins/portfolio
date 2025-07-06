import React, { useState, useEffect } from 'react';

const Sprout = ({ sproutText, typeId, frameId }) => {

    const pics = [
        ["/tree1.png",
        "/tree2.png",
        "/tree3.png",
        "/tree4.png",],

        ["/sakura1.png",
        "/sakura2.png",
        "/sakura3.png",
        "/sakura4.png"],

        ["/birch1.png",
        "/birch2.png",
        "/birch3.png",
        "/birch4.png"],

        ["/willow1.png",
        "/willow2.png",
        "/willow3.png",
        "/willow4.png"]
    ]

    const [index, setIndex] = useState(3);
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        let interval;
        if (hovering) {
            if (index < pics[typeId].length - 1) {
                interval = setInterval(() => {
                    setIndex((prev) => prev + 1);
                }, 80); // 80ms per frame
            }
            else {
                setHovering(false)
            }
        }

        return () => clearInterval(interval);
    }, [hovering, index]);

    const handleMouseEnter = () => {
        setIndex(0); // restart sequence
        setHovering(true);
    };

    return (
        <div className="slot" onMouseEnter={handleMouseEnter} onClick={handleMouseEnter}>
            <div className='border-slot'>
                <div className='flex items-end'>
                    <div className='shine'></div>
                    <img src={pics[typeId][index]} alt="growing plant" />
                </div>
                <p className='journey-text'>{sproutText}</p>
            </div>
        </div>
    );
};

export default Sprout;
