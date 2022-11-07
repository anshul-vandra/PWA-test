import React, { useState } from "react";
import ReactLassoSelect from "react-lasso-select";

function pointsToString(points) {
    return points.map(({ x, y }) => `${x},${y}`).join(" ");
}

export function ImageSelection() {
    const [src] = useState(
        "https://s3-ap-southeast-1.amazonaws.com/trails.wound.management/Before_Cleaning/Algo/Wound_Characterstics/p5-1665552093576-doc2.jpg"
    );

    const [img, setImg] = useState({ width: 0, height: 0 });
    const [width, setWidth] = useState(300);
    console.log("width", img);

    let pie =
        [{ x: 1281, y: 1501 },
        { x: 1305, y: 2085 },
        { x: 1848, y: 2085 },
        { x: 1816, y: 1777 },
        { x: 1646, y: 1550 },
        ]

    let round =
        [
            { x: 1216, y: 1720 },
            { x: 1103, y: 1809 },
            { x: 1103, y: 1955 },
            { x: 1159, y: 2028 },
            { x: 1265, y: 2061 },
            { x: 1378, y: 2053 },
            { x: 1467, y: 1996 },
            { x: 1467, y: 1890 },
            { x: 1427, y: 1801 },
            { x: 1329, y: 1720 },
        ]

    let line = [
        { x: 1419, y: 1509 },
        { x: 1427, y: 2069 },
        { x: 1435, y: 2702 },
        { x: 1516, y: 2710 },
        { x: 1516, y: 2117 },
        { x: 1500, y: 1509 },
    ]

    let halfArc = [{ x: 1338, y: 1493 },
    { x: 1338, y: 1890 },
    { x: 1338, y: 2328 },
    { x: 1338, y: 2864 },
    { x: 1678, y: 2669 },
    { x: 1856, y: 2361 },
    { x: 1856, y: 1963 },
    { x: 1694, y: 1687 },
    ]

    let edge = [
        { x: 1808, y: 2629 },
        { x: 1946, y: 3010 },
        { x: 1986, y: 3432 },
        { x: 1800, y: 3902 },
        { x: 2100, y: 3610 },
        { x: 2140, y: 3245 },
        { x: 2051, y: 2904 }
    ]
    const init = "172,173 509,99 458,263"
        ?.split(" ")
        ?.map((c) => c.split(",").map(Number))
        ?.map(([x, y]) => ({ x, y }));

    const [points, setPoints] = useState([]);
    console.log('points: ', points);
    return (
        <div className="App">
            <div style={{ margin: '30px', display: 'flex', justifyContent: 'space-between', width: '600px' }}>
                <button onClick={() => { setPoints([]) }}>Reset</button>
                <button onClick={() => { setPoints(pie) }}>Pie</button>
                <button onClick={() => { setPoints(round) }}>round</button>
                <button onClick={() => { setPoints(line) }}>line</button>
                <button onClick={() => { setPoints(halfArc) }}>halfArc</button>
                <button onClick={() => { setPoints(edge) }}>edge</button>
                {/* <button onClick={() => { setPoints(halfArc) }}>halfArc</button> */}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ReactLassoSelect
                    value={points}
                    src={src}
                    onChange={(path) => {
                        setPoints(path);
                    }}
                    imageStyle={{ width: `${width}px` }}
                    onImageLoad={(e) => {
                        const img = e.target
                        setImg({
                            width: img.naturalWidth,
                            height: img.naturalHeight
                        });
                    }}
                />
            </div>
            <br />
            {/* Image width:{" "}
            <input
                type="range"
                min="0"
                max="1000"
                value={width}
                onChange={(e) => setWidth(+e.target.value)}
            /> */}
            {/* Points: {pointsToString(points)} */}
            {/* <svg
                viewBox={`0 0 ${img.width} ${img.height}`}
                width={width}
                style={{ border: "1px solid black" }}
            >
                <polyline fill="red" points={pointsToString(points)} />
            </svg> */}
        </div>
    );
}
