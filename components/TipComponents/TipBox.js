/* import React, { useState } from 'react';
import * as S from "./TipBox.styled";
import { keyframes } from "@emotion/react";

export default function TipBox(){
    const rotateAnimation = keyframes`
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(90deg);
        }
    `;

    const [isTipVisible, setIsTipVisible] = useState(false);
    const [isImageRotated, setIsImageRotated] = useState(false);

    const handleToggleClick = () => {
        setIsTipVisible(!isTipVisible);
        setIsImageRotated(!isImageRotated);
    };

    return (
        <S.Container>
            <S.TipBox expanded={isTipVisible}>
                <S.TipIcon src='/img/Tip.svg'/>
                <div>
                    <S.TipTitle>Transportation Tips</S.TipTitle>
                    {isTipVisible && (
                        <S.TipText>Transfer refers to transferring from the transportation you were riding...</S.TipText>
                    )}
                </div>
                <S.MoveImg
                    onClick={handleToggleClick}
                    src='/img/toggle1.png'
                    className={isImageRotated ? 'rotate-animation' : ''}
                />
            </S.TipBox>
        </S.Container>
    );
};
 */

/* import React, { useState } from 'react';
import * as S from "./TipBox.styled";
import { keyframes } from "@emotion/react";

export default function TipBox() {
    const rotateAnimation = keyframes`
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(90deg);
        }
    `;

    const [isTipVisible, setIsTipVisible] = useState(false);

    const handleToggleClick = () => {
        setIsTipVisible(!isTipVisible);
    };

    return (
        <S.Container>
            <S.TipBox expanded={isTipVisible}>
                <S.TipIcon src='/img/Tip.svg'/>
                <div>
                    <S.TipTitle>Transportation Tips</S.TipTitle>
                    {isTipVisible && (
                        <S.TipText>Transfer refers to transferring from the transportation you were riding...</S.TipText>
                    )}
                </div>
                <S.MoveImg
                    onClick={handleToggleClick}
                    src='/img/toggle1.png'
                    className={isTipVisible ? 'rotate-animation' : ''}
                />
            </S.TipBox>
        </S.Container>
    );
};



 */
/* 
import React, { useState } from 'react';
import * as S from "./TipBox.styled";

export default function TipBox() {
    const [isTipVisible, setIsTipVisible] = useState(false);
    const [isImageRotated, setIsImageRotated] = useState(false);

    const handleToggleClick = () => {
        setIsTipVisible(!isTipVisible);
        setIsImageRotated(!isImageRotated);
    };

    return (
        <S.Container>
            <S.TipBox expanded={isTipVisible}>
                <S.TipIcon src='/img/Tip.svg'/>
                <S.TipTitle onClick={handleToggleClick}>Transportation Tips</S.TipTitle>
                <S.MoveImg
                    onClick={handleToggleClick}
                    src='/img/toggle1.png'
                    className={isImageRotated ? 'rotate-animation' : ''}
                />
                <S.TipText expanded={isTipVisible}>
                    Transfer refers to transferring from the transportation you were riding...
                </S.TipText>
            </S.TipBox>
        </S.Container>
    );
} */

/* import React, { useState } from 'react';
import * as S from "./TipBox.styled";

export default function TipBox() {
    const [isTipVisible, setIsTipVisible] = useState(false);
    const [isImageRotated, setIsImageRotated] = useState(false);

    const handleToggleClick = () => {
        setIsTipVisible(!isTipVisible);
        setIsImageRotated(!isImageRotated);
    };

    return (
        <S.Container>
            <S.TipBox expanded={isTipVisible}>
                <S.TipIcon src='/img/Tip.svg'/>
                <S.TipTitle onClick={handleToggleClick}>Transportation Tips</S.TipTitle>
                <S.MoveImg
                    onClick={handleToggleClick}
                    src='/img/toggle1.png'
                    className={isImageRotated ? 'rotate-animation' : ''}
                />
                {isTipVisible && (
                    <S.TipText>
                        Transfer refers to transferring from the transportation you were riding...
                    </S.TipText>
                )}
            </S.TipBox>
        </S.Container>
    );
}
 */

import React, { useState } from 'react';
import * as S from "./TipBox.styled";

export default function TipBox() {
    const [isTipVisible, setIsTipVisible] = useState(false);
    const [isImageRotated, setIsImageRotated] = useState(false);

    const handleToggleClick = () => {
        setIsTipVisible(!isTipVisible);
        setIsImageRotated(!isImageRotated);
    };

    return (
        <S.Container>
            <S.TipBox expanded={isTipVisible}>
                <div onClick={handleToggleClick}>
                    <S.TipIcon src='/img/Tip.svg'/>
                    <S.TipTitle>Transportation Tips</S.TipTitle>
                    <S.MoveImg
                        src='/img/toggle1.png'
                        className={isImageRotated ? 'rotate-animation' : ''}
                    />
                </div>
                {isTipVisible && (
                    <S.TipText>Transfer refers to transferring from the transportation you were riding to the same or different transportation.
                        People usually transfer when transportation doesn't go to their destination at once.
                        There is no additional charge for each subway and bus transfer, and the transfer between the subway and bus is also free.</S.TipText>
                )}
            </S.TipBox>
        </S.Container>
    );
}
