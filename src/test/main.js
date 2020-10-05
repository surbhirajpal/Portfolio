import React from 'react'
import { } from 'antd'
import './styles.scss'


const Flipper = () => {
    const [ids, setIds] = React.useState(["square-1", "square-2"]);
    const [idsTest, setIdsTest] = React.useState(["square-3", "square-4"]);

    const rects = React.useRef(new Map()).current;

    const swap = ([a, b]) => [b, a];

    React.useEffect(() => {
        const squares = document.querySelectorAll(".square");

        // Cache position and size once on initial render
        for (const square of squares) {
            rects.set(square.id, square.getBoundingClientRect());
        }
    }, []);

    React.useLayoutEffect(() => {
        const squares = document.querySelectorAll(".square");

        for (const square of squares) {
            // Get previous size and position from cache
            const cachedRect = rects.get(square.id);

            if (cachedRect) {
                const nextRect = square.getBoundingClientRect();

                // Invert
                const translateX = cachedRect.x - nextRect.x;

                // Cache the next size and position
                rects.set(square.id, nextRect);

                // Play
                square.animate(
                    [
                        { transform: `translateX(${translateX}px)` },
                        { transform: `translateX(0px)` }
                    ],
                    1000
                );
            }
        }
    },ids);

    React.useLayoutEffect(() => {
        const squares = document.querySelectorAll(".square");

        for (const square of squares) {
            // Get previous size and position from cache
            const cachedRect = rects.get(square.id);

            if (cachedRect) {
                const nextRect = square.getBoundingClientRect();

                // Invert
                const translateX = cachedRect.x - nextRect.x;

                // Cache the next size and position
                rects.set(square.id, nextRect);

                // Play
                square.animate(
                    [
                        { transform: `translateX(${translateX}px)` },
                        { transform: `translateX(0px)` }
                    ],
                    1000
                );
            }
        }
    },idsTest);

    const timer = setTimeout(() => {
        setIds(swap(ids))
      }, 3000);
  

    return (
        <div className="container">
            {ids.map((id, i) => {
                return (
                    <div id={id} onClick={() => setIds(swap(ids))} className={`square`}>
                        {id}
                    </div>
                );
            })}
            {idsTest.map((id, i) => {
                return (
                    <div id={id} onClick={() => setIdsTest(swap(idsTest))} className={`square`}>
                        {id}
                    </div>
                );
            })}
        </div>
    );
};

export default Flipper