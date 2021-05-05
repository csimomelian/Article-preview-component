import styled, {css} from 'styled-components/macro';
import { device } from '../../../utils/breakpoints';

const Card = styled.div`

    display:flex;
    width: 100%;
    max-width: 37.3rem;
    box-shadow:0 7px 50px 10px rgba(95, 95, 95, .11);
    border-radius: 1rem;
    flex-direction:column;

    @media ${device.laptop} { 
        flex-direction:row;
        max-width: 73.3rem;

    }

`;

const CardImage = styled.div`

    flex: 0 0 25rem;
    overflow: hidden;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;

    img {
        width:100%;
        height:100%;
        object-fit:cover;
        object-position: 0 0;
        display:block;
    }

    @media ${device.laptop} { 
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        flex: 0 1 39%;
    }
`;

const CardInfo = styled.div`

    flex: 1 1 0%;
    padding: 2rem 2.9rem;
    background-color:var(--color-white);
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    position: relative;

    @media ${device.laptop} { 
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
        padding: 3.2rem 3.9rem;
    }
    
`;

const Title = styled.h1`

    color: var(--color-very-dark-grayish-blue);
    font-weight: 700;
    font-size: 1.7rem;
    margin-bottom: 1.3rem;

    @media ${device.laptop} {
        margin-bottom: 1.2rem;
        font-size: 2.07rem;
     }

`;

const Description = styled.p`

    font-weight: 500;
    font-size: 1.34rem;
    line-height: 1.6;
    margin-bottom: 4rem;
    color: var(--color-desaturated-dark-blue);

    @media ${device.laptop} { 
        
        margin-bottom: 1.7rem;
    }

`;

const Avatar = styled.div`

    display:flex;
    align-items: center;

    @media ${device.laptop} {
        position:relative;
     }

`;

const AvatarPic = styled.div`

    overflow:hidden;
    flex: 0 0 4rem;
    height: 4rem;
    border-radius: 50%;
    margin-right: 1.7rem;

    img {
        width:100%;
        height:100%;
        object-fit:cover;
        display:block;
    }

`;

const AvatarInfo = styled.div``;

const PopupRRSS = styled.div`

    background-color: var(--color-very-dark-grayish-blue);
    display:flex;
    align-items:center;
    position:absolute;
    padding: 3.1rem;
    bottom: 0;
    left: 0;
    right: 0;
    z-index:2;
    opacity:0;
    visibility:hidden;
    pointer-events:none;
    transition: all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;

    p {

        font-weight: 500;
        text-transform: uppercase;
        color: var(--color-grayish-blue);
        font-size: 1.3rem;
        letter-spacing: 4.5px;
        margin:0;

    }
    
    @media ${device.laptop} {

        bottom: 6.3rem;
        left: 61.5%;
        right:auto;
        border-radius: 1.2rem;
        padding: 1.8rem 3.8rem;

        &::after{
            content:"";
            position:absolute;
            border-top: 1rem solid var(--color-very-dark-grayish-blue);
            border-left: 1rem solid transparent;
            border-right: 1rem solid transparent;
            bottom:-1rem;
            left: 50%;
            transform: translateX(-50%);
        }

     }

`;

const AvatarRRSS = styled.div`

    margin-left:auto;
    background-color: var(--color-light-grayish-blue);
    border-radius: 50%;
    flex: 0 0 3.4rem;
    height: 3.4rem;
    display:flex;
    cursor: pointer;
    position: relative;
    z-index:4;
    transition: all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);

    svg {
        margin:auto;
    }

    ${({active}) => active && css`

        background-color: var(--color-desaturated-dark-blue);

        @media ${device.laptop} {

            background-color: var(--color-very-dark-grayish-blue);
            
        }

        path {

            fill:#fff;

        }

        &~${PopupRRSS} {

            opacity: 1;
            pointer-events:initial;
            visibility:visible;

        }
    
    `};

        @media (hover: hover) {

            &:hover {

                background-color: var(--color-desaturated-dark-blue);

                @media ${device.laptop} {
                    background-color: var(--color-very-dark-grayish-blue);
                
                }

                path {
                    fill:#fff;
                }

            }
            
        }

`;

const InfoName = styled.div`

    color: var(--color-very-dark-grayish-blue);
    font-size: 1.33rem;
    font-weight: 700;
    line-height: 1.6;

`;

const InfoDate = styled.div`

    color: var(--color-desaturated-dark-blue);
    font-size: 1.33rem;

`;

const RRSSIcons = styled.div`

    margin-left:1.8rem;
    display:flex;

    img {
        cursor:pointer;
    }

    & {
        img + img {
            margin-left:1.6rem;
        }
    }
`;

export {
    Card,
    CardImage,
    CardInfo,
    Title,
    Description,
    Avatar,
    AvatarPic,
    AvatarInfo,
    AvatarRRSS,
    InfoName,
    InfoDate,
    PopupRRSS,
    RRSSIcons
}