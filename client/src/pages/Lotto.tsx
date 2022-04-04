import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { ResponsiveBar } from '@nivo/bar';

function Lotto() {
    const TOTAL_COMBINATIONS = 10000;
    let MAX_TIMER = 2;
    const TOTAL_BALL_NUMBER = 7;
    const messages = {
        initial: `${MAX_TIMER}초 후 10,000 개의 조합 중 첫 10개 조합`,
        combination: "10,000 개의 조합 중 첫 10개 조합"
    };
    const ballCSS = 'border-2 border-black rounded-full p-8 flex justify-center items-center h-12 w-12 mx-2';
    const plusCSS = 'flex justify-center items-center mx-2';
    const [Timer, setTimer] = React.useState<number>(MAX_TIMER);
    // const [Screen, setScreen] = React.useState<string>('initial');
    const [Screen, setScreen] = React.useState<string>('initial');
    const [RenderHTML, setRenderHTML] = React.useState<string>('');
    const [Combinations, setCombinations] = React.useState<Array<number[]>>([]);
    const [RenderedCombinations, setRenderedCombinations] = React.useState<number>(0);
    const [Message, setMessage] = React.useState<string>(messages.initial);
    // const [GraphDataSort, setGraphDataSort] = React.useState<boolean>(false);
    const [Graph, setGraph] = React.useState<Array<number>>([]);
    

    useEffect(() => {
        if(Combinations.length < TOTAL_COMBINATIONS) {
            let tempCombinations: Array<number[]> = [];
            
            while(tempCombinations.length < TOTAL_COMBINATIONS) {
                let tempCombination: Array<number> = [];

                while(tempCombination.length < TOTAL_BALL_NUMBER) {
                    let rand = Math.floor(Math.random() * 45) + 1;
                    if(!tempCombination.includes(rand)) tempCombination.push(rand);
                }

                tempCombinations.push(tempCombination);
            }
            
            setCombinations(tempCombinations);  
        }
    }, []);

    const data = [
        {
          "country": "AD",
          "hot dog": 36,
          "hot dogColor": "hsl(158, 70%, 50%)",
          "burger": 44,
          "burgerColor": "hsl(94, 70%, 50%)",
          "sandwich": 81,
          "sandwichColor": "hsl(268, 70%, 50%)",
          "kebab": 177,
          "kebabColor": "hsl(157, 70%, 50%)",
          "fries": 98,
          "friesColor": "hsl(258, 70%, 50%)",
          "donut": 58,
          "donutColor": "hsl(238, 70%, 50%)"
        },
        {
          "country": "AE",
          "hot dog": 37,
          "hot dogColor": "hsl(74, 70%, 50%)",
          "burger": 158,
          "burgerColor": "hsl(274, 70%, 50%)",
          "sandwich": 196,
          "sandwichColor": "hsl(3, 70%, 50%)",
          "kebab": 47,
          "kebabColor": "hsl(1, 70%, 50%)",
          "fries": 127,
          "friesColor": "hsl(48, 70%, 50%)",
          "donut": 165,
          "donutColor": "hsl(249, 70%, 50%)"
        },
        {
          "country": "AF",
          "hot dog": 52,
          "hot dogColor": "hsl(285, 70%, 50%)",
          "burger": 94,
          "burgerColor": "hsl(75, 70%, 50%)",
          "sandwich": 4,
          "sandwichColor": "hsl(64, 70%, 50%)",
          "kebab": 187,
          "kebabColor": "hsl(78, 70%, 50%)",
          "fries": 3,
          "friesColor": "hsl(97, 70%, 50%)",
          "donut": 188,
          "donutColor": "hsl(223, 70%, 50%)"
        },
        {
          "country": "AG",
          "hot dog": 59,
          "hot dogColor": "hsl(188, 70%, 50%)",
          "burger": 131,
          "burgerColor": "hsl(128, 70%, 50%)",
          "sandwich": 127,
          "sandwichColor": "hsl(276, 70%, 50%)",
          "kebab": 99,
          "kebabColor": "hsl(275, 70%, 50%)",
          "fries": 128,
          "friesColor": "hsl(38, 70%, 50%)",
          "donut": 100,
          "donutColor": "hsl(330, 70%, 50%)"
        },
        {
          "country": "AI",
          "hot dog": 118,
          "hot dogColor": "hsl(99, 70%, 50%)",
          "burger": 47,
          "burgerColor": "hsl(297, 70%, 50%)",
          "sandwich": 190,
          "sandwichColor": "hsl(233, 70%, 50%)",
          "kebab": 3,
          "kebabColor": "hsl(47, 70%, 50%)",
          "fries": 163,
          "friesColor": "hsl(251, 70%, 50%)",
          "donut": 111,
          "donutColor": "hsl(101, 70%, 50%)"
        },
        {
          "country": "AL",
          "hot dog": 71,
          "hot dogColor": "hsl(136, 70%, 50%)",
          "burger": 187,
          "burgerColor": "hsl(327, 70%, 50%)",
          "sandwich": 37,
          "sandwichColor": "hsl(0, 70%, 50%)",
          "kebab": 70,
          "kebabColor": "hsl(55, 70%, 50%)",
          "fries": 168,
          "friesColor": "hsl(217, 70%, 50%)",
          "donut": 77,
          "donutColor": "hsl(223, 70%, 50%)"
        },
        {
          "country": "AM",
          "hot dog": 124,
          "hot dogColor": "hsl(195, 70%, 50%)",
          "burger": 25,
          "burgerColor": "hsl(148, 70%, 50%)",
          "sandwich": 186,
          "sandwichColor": "hsl(355, 70%, 50%)",
          "kebab": 177,
          "kebabColor": "hsl(132, 70%, 50%)",
          "fries": 98,
          "friesColor": "hsl(62, 70%, 50%)",
          "donut": 61,
          "donutColor": "hsl(355, 70%, 50%)"
        }
      ]

    const MyResponsiveBar = (data:any) => (
        <ResponsiveBar
            data={data}
            keys={[
                'hot dog',
                'burger',
                'sandwich',
                'kebab',
                'fries',
                'donut'
            ]}
            indexBy="country"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'fries'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sandwich'
                    },
                    id: 'lines'
                }
            ]}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'country',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'food',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
        />
    )

    const renderTimer = () => {
        if(Timer) {
            setTimeout(() => {
                setTimer(Timer - 1);
                if(Timer === 1) {
                    if(RenderedCombinations < 11) setRenderedCombinations(RenderedCombinations + 1);
                }
            }, 1000);
        };

        if(Screen !== 'end' && Timer === 0) {
            if(Screen === 'initial') {
                setScreen('combination');
                setMessage(messages.combination);
            } else if(Screen === 'combination' && RenderedCombinations === 11) {
                setScreen('graph');
            } else if(Screen === 'graph') {
                MAX_TIMER = 60;
            }

            setTimer(MAX_TIMER);
        }

        return(
            <p>{`00:${Timer < 10 ? `0${Timer}` : Timer}`}</p>
        )
    }

    const render = () => {
        if(Screen === 'combination') { 
            if(Timer === 0 && RenderedCombinations < 11) {
                let html = '';

                for(let i = 0; i < RenderedCombinations; i++) {
                    let numbers = '';
                    for(let j = 0; j < Combinations[i].length; j++) {
                        if(j !== Combinations[i].length - 1) {
                            numbers += `<div className='${ballCSS}'>${Combinations[i][j] < 10 ? `0${Combinations[i][j]}` : Combinations[i][j]}</div>`;
                        } else {
                            numbers += `<div className='${plusCSS}'> + </div><div className='${ballCSS}'>${Combinations[i][j] < 10 ? `0${Combinations[i][j]}` : Combinations[i][j]}</div>`;
                        }
                    };

                    html += 
                    `
                    <div key=${i} className='flex justify-center text-3xl my-2'>
                        ${numbers}
                    </div>
                    `; 
                };
                setRenderHTML(html);
            }
            return parse(RenderHTML);
        } else if(Screen === 'graph') {
            // let html = `graph`;
            
            // if(Graph.length === 0) {
            //     let temp: Array<number> = [];

            //     for(let i = 0; i < 45; i++) {
            //         temp[i] = 0;
            //     }

            //     Combinations.forEach(combination => {
            //         combination.forEach(number => {
            //             temp[number - 1] += 1;
            //         });
            //     });

            //     setGraph(temp);
            // }

            // return parse(html);
            MyResponsiveBar(data);
        }
    }; 

    return (
        <>
            <div className='flex items-center my-4'>
                <div className='flex justify-center basis-2/6'>
                    <img className='w-1/2' src={require('../img/645.jpg')} />
                </div>
                <div className='flex justify-center basis-2/6'>
                    <div className='text-2xl'>
                        <p>1004회 예상번호</p>
                        <p>추첨일: 2022년 3월 5일</p>
                    </div>
                </div>
                <div className='flex justify-center basis-2/6 text-5xl'>
                    {renderTimer()}
                </div>
            </div>
            <div>
                <div className='my-8 text-center text-4xl'>
                    <p>{Message}</p>    
                </div>
                {render()}
            </div>
        </>
    );
}

export default Lotto;