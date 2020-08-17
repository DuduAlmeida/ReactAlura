import React from 'react';
import styled from 'styled-components';
import LinkWrapper from './Helper/LinkWrapper';

const HeaderContent = styled.div`
    a{
        text-decoration: none;
    }
    a:hover{
        color: #0DB39E;
    }
    a.brand-logo{
        color: #0DB39E;
        margin-left: 1em;
    }
    a.brand-logo:hover{
        color: #048BA8;
    }
`;

const Header = () => {
    return (
        <nav>
            <div class="nav-wrapper header">
                <HeaderContent>
                    <LinkWrapper to="/" className='brand-logo' activeStyle={{}}>Projeto React - Dudu Show</LinkWrapper>
                    <ul class="right">
                        <li><LinkWrapper to="/autores"  activeStyle={{color: '#0DB39E'}}>Autores</LinkWrapper></li>
                        <li><LinkWrapper to="/livros"   activeStyle={{color: '#0DB39E'}}>Livros</LinkWrapper></li>
                        <li><LinkWrapper to="/sobre"    activeStyle={{color: '#0DB39E'}}>Sobre</LinkWrapper></li>
                    </ul>
                </HeaderContent>
            </div>
        </nav>
    );
};

export default Header;