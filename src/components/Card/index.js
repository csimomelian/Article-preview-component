import React, { useState } from 'react'
import * as S from './styled'
import DrawersImage from '../../assets/images/drawers.jpg';
import AvatarImage from '../../assets/images/avatar-michelle.jpg';
import FacebookIcon from '../../assets/images/icon-facebook.svg';
import TwitterIcon from '../../assets/images/icon-twitter.svg';
import PinterestIcon from '../../assets/images/icon-pinterest.svg';

const Icons = [{
    src:FacebookIcon,
    alt: "FacebookIcon"
},
{
    src:TwitterIcon,
    alt: "TwitterIcon"
},
{
    src:PinterestIcon,
    alt: "PinterestIcon"
}];

export function Card() {

    const [active, setActive] = useState(false);
    
    return (
        <S.Card>
            <S.CardImage>
                <img src={DrawersImage} alt="drawers" />
            </S.CardImage>
            <S.CardInfo>
                <S.Title>Shift the overall look and feel by adding these wonderful touches to furniture in your home</S.Title>
                <S.Description>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</S.Description>
                <S.Avatar>
                    <S.AvatarPic>
                        <img src={AvatarImage} alt="michelle-appleton" />
                    </S.AvatarPic>
                    <S.AvatarInfo>
                        <S.InfoName>Michelle Appleton</S.InfoName>
                        <S.InfoDate>28 Jun 2020</S.InfoDate>
                    </S.AvatarInfo>
                    <S.AvatarRRSS active={active} onClick={() => setActive(prevActive => !prevActive)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
                    </S.AvatarRRSS>
                    <S.PopupRRSS>
                        <p>share</p>
                        <S.RRSSIcons>
                            {Icons.map(({src, alt}, i) => <img src={src} alt={alt} key={`${i}-icon`} onClick={() => setActive(prevActive => !prevActive)} /> )}
                        </S.RRSSIcons>
                    </S.PopupRRSS>
                </S.Avatar>
            </S.CardInfo>
        </S.Card>

    )

}
