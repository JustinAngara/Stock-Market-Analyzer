import styled from "styled-components";
import PropTypes from "prop-types";

const TabItem = ({ tab, curTab, curTabUpdate }) => {
    const handleClick = () =>{
        curTabUpdate(tab);
    }

    const theClassName = tab.id ===curTab.id ? "selected" : "";

    return <TabItemStyled className = {theClassName} onClick={handleClick}>{tab.title}</TabItemStyled>;
};

export default TabItem;

// prop-types
TabItem.propTypes = {
    tab: PropTypes.object.isRequired,
};

const TabItemStyled = styled.div`
    background-color: #0f0f0f;
    color: #8d918d;
    text-align: center;
    cursor: pointer;
    border-radius: 5px 5px 0px 0px;
    line-height: 40px;
    margin-right: 5px;

    display: inline-block;
    width: clamp(75px, 20%, 150px);

    &.selected {
        background-color: #808080;
        color: white;
    }
`;
