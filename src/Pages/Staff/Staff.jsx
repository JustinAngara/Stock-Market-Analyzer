import styled from 'styled-components';
import Inset from "@/Common/PagesLayout/Inset.jsx"
import StaffList from "./StaffList/StaffList.jsx"
const Staff = () => {
    return (
        <StaffStyled>
            <Inset>
                <h1>Staff</h1>
                <StaffList></StaffList>
            </Inset>
        </StaffStyled>
    );
}

export default Staff;

const StaffStyled = styled.div`

`;