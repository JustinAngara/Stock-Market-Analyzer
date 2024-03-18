import styled from 'styled-components';
import PropTypes from "prop-types";

const AccoladeItem = ({accolade}) => {
    return <AccoladeItemStyled>
            <ul>
                <li>{accolade}</li>
            </ul>
        </AccoladeItemStyled>;
}

export default AccoladeItem;

// prop-types
AccoladeItem.propTypes = {
    accolade: PropTypes.string.isRequired
};

const AccoladeItemStyled = styled.div`

`;