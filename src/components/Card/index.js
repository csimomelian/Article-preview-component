import React from 'react'
import * as S from './styled'
import DrawersImage from '../../assets/images/drawers.jpg';
import AvatarImage from '../../assets/images/avatar-michelle.jpg';

export function Card() {
    
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
                    <img src={AvatarImage} alt="-michelle" />
                    </S.AvatarPic>
                    <S.AvatarInfo>

                    </S.AvatarInfo>
                    <S.AvatarRRSS>

                    </S.AvatarRRSS>
                </S.Avatar>
            </S.CardInfo>
        </S.Card>

    )

}
