import styled from 'styled-components';
import Inset from "@/Common/PagesLayout/Inset.jsx"
import StaffList from "./StaffList/StaffList.jsx"
const Staff = () => {
    return (
        <StaffStyled>
            <Inset>
                <h1>Projects</h1>
                <a href="https://github.com/JustinAngara" target="_blank">
                    Go to my GitHub!
                </a>


                <StaffList></StaffList>
            </Inset>
        </StaffStyled>
    );
}

export default Staff;

const StaffStyled = styled.div`
    a {
        color: #FFFFFF;
        text-decoration: none;
        font-size: 14px;
    }
`;