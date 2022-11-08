import config from '../../../config.json';
import styled from 'styled-components';

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

function Header() {
    return(
        <StyledHeader>
            <img src={`https://github.com/${config.github}.png`} alt="Banner"/>
            {config.name}
            {config.jog}
        </StyledHeader>
    )
  }
  
  export default Header