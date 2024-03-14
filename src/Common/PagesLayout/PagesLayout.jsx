import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

// Medium Query
import { useMediaQuery } from '@/Common/useMediaQuery';

/* Components ---------------------------*/
import Header from './Header/Header.jsx';
import Footer from './Footer.jsx';

const PagesLayout = () => {
    return (
        <PagesLayoutStyled className='PagesLayout'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </PagesLayoutStyled>
    );
}

export default PagesLayout;

const color1 = "#343336";
const color2 = "#B408A4";

const PagesLayoutStyled = styled.div`
    main {
        // this is where the background color is
        background: hsla(0, 0%, 59%, 1);

        background: linear-gradient(90deg, hsla(0, 0%, 59%, 1) 0%, hsla(0, 0%, 54%, 1) 50%, hsla(0, 0%, 0%, 1) 100%);

        background: -moz-linear-gradient(90deg, hsla(0, 0%, 59%, 1) 0%, hsla(0, 0%, 54%, 1) 50%, hsla(0, 0%, 0%, 1) 100%);

        background: -webkit-linear-gradient(90deg, hsla(0, 0%, 59%, 1) 0%, hsla(0, 0%, 54%, 1) 50%, hsla(0, 0%, 0%, 1) 100%);

        filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#969696", endColorstr="#898989", GradientType=1 );
        min-height: 600px;
        .Inset {
            padding: 50px 10px;
        }
    }
`;