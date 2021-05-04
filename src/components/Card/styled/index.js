import styled from 'styled-components/macro';

const Card = styled.div`
    display:flex;
    width: 100%;
    max-width: 73.3rem;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    
`;

const CardImage = styled.div`
    flex: 0 1 39%;
    img {
        width:100%;
        height:100%;
        object-fit:cover;
        object-position: 0 0;
    }
`;

const CardInfo = styled.div`
    flex: 1 1 0%;
    padding: 3.2rem 3.9rem;
`;

const Title = styled.h1`

    color: var(--color-very-dark-grayish-blue);
    font-weight: 700;
    font-size: 2.07rem;
    margin-bottom: 0.5rem;
`;

const Description = styled.p`

    font-weight: 500;
    font-size: 1.34rem;
    line-height: 1.6;
    margin-top: 1rem;
`;

const Avatar = styled.div`

    display:flex;
    margin-top: 1.9rem;

`;

const AvatarPic = styled.div`

    overflow:hidden;
    flex: 0 0 4rem;
    height: 4rem;
    border-radius: 50%;
    margin-right: 1rem;
    img {
        width:100%;
        height:100%;
        object-fit:cover;
    }
`;

const AvatarInfo = styled.div``;

const AvatarRRSS = styled.div`

    margin-left:auto;
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
    AvatarRRSS
}