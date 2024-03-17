import styled from 'styled-components';
import PropTypes from "prop-types";

import Accolades from "./Accolades/Accolades.jsx"
const StaffMember = ({member}) => {
    const { name, image, yearStarted, accolades } = member;

    return <StaffMemberStyled>
        <img src= {image} alt={name} />
        <h3> {name} </h3>
        <div className="bottom">
            <p>
                <b> Year Started:</b> {yearStarted}
            </p>

            <Accolades accolades={accolades}/>
        </div>
    </StaffMemberStyled>;
}

export default StaffMember;

// prop-types
StaffMember.propTypes = {
    member: PropTypes.object.isRequired
};
const StaffMemberStyled = styled.div`
    border: 2px solid #FFFFFF;
    background-color: #4d4d4d;

    img {
        width: 100%;
        aspect-ratio: 1/1;

        display: block;
    }

    .bottom {
        padding: 20px;
    }

    h3 {
        color: white;
        background-color: #44011d;
        padding: 5px 10px;
        margin: 0px;
    }
`;