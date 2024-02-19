import styled from 'styled-components';
import PropTypes from "prop-types";

import AccoladeItem from "./AccoladeItem"

const Accolades = ({accolades}) => {
    return <AccoladesStyled>
        {
            accolades.map((accolade, i)=>{
                return <AccoladeItem key ={i} accolade={accolade} />
            })
        }

    </AccoladesStyled>;
}

export default Accolades;

// prop-types
Accolades.propTypes = {
    prop: PropTypes.array.isRequired
};

const AccoladesStyled = styled.div`
    padding-left: 20px;
    list-style-type: disc;
`;