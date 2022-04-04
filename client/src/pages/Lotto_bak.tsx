import React, { Component, useEffect, useState } from 'react';

function Lotto() {
    const [Timer, setTimer] = React.useState<number>(10);
    const [InitialScreen, setInitialScreen] = React.useState<boolean>(true);
    const [TenCombinations, setTenCombinations] = React.useState<Array<number[]>>([]);
    const [Turn, setTurn] = React.useState<number>(0);

    useEffect(() => {
        if(TenCombinations.length < 10) {
            let tempCombinations: Array<number[]> = [];
            
            while(tempCombinations.length < 10) {
                let tempCombination: Array<number> = [];

                while(tempCombination.length < 6) {
                    let rand = Math.floor(Math.random() * 45) + 1;
                    if(tempCombination.indexOf(rand) === -1) tempCombination.push(rand);
                }

                tempCombinations.push(tempCombination);
            }
            
            setTenCombinations(tempCombinations);
        }

        if(Timer) {
            setTimeout(() => {
                setTimer(Timer - 1);
            }, 1000);
        }

        if(Turn < 10 && Timer === 0) {
            setTimer(10);
            setTurn(Turn + 1);        
        }

    }, [Timer]);

    const renderCombinations = () => {
        console.log('TenCombinations: ', TenCombinations);

        // const rendering = TenCombinations.map((com, index) => {

        // })

        return (
            <div> 
                {Turn}
             </div>
        )

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
                    <p>{`00:${Timer !== 10 ? `0${Timer}` : Timer}`}</p>
                </div>
            </div>
            {InitialScreen ? (
                TenCombinations.length && (
                    <div>
                        <div className='my-8 text-center text-4xl'>
                            <p>10,000 개의 조합 중 첫 10개 조합</p>    
                        </div>
                        {renderCombinations()}
                    </div>
                )
            ) : (
                <div> Not Initial </div>                    
            )}
        </>
    );
}

export default Lotto;