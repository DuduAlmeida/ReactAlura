import styled from 'styled-components';
// import { Card as card, CardContent as cardContent, CardHeader as cardHeader } from '../css/mainStyles';

export const Container = styled.div`
    max-width: 100vw;
    margin:0%;
    padding: 5%;
    display: flex;
    justify-content: center;
    position: relative;
`;

export const Card = styled.div`
    box-shadow: #f1f8fe -13px -13px 30px, #d1d9e6 15px 15px 30px;
    background-color: white;
    opacity: 100;
    border: 0;
    border-radius: 30px;
    padding: 1em;
    width: 80%;
`;

export const CardHeader = styled.div`
    background-color:transparent;
    border:0;

    display:flex;
    justify-content:space-between;
`;

export const CardContent = styled.div`
    background-color:transparent;
`;
