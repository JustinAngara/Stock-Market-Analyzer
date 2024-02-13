import styled from 'styled-components';
import SingleEssay from "./SingleEssay.jsx"

const Essays = () => {
    return(
    <EssaysStyled>
        <h2>Essays</h2>

        <SingleEssay question={`Q1: Explain the difference between HTML, CSS, and JavaScript`}>
            <ul>
                <li> <b>HTML </b>
                    is the structure of the website, think text, images, etc. It is essentially the tags/divs you would want to display on your website</li>
                <li> <b>CSS </b>
                    is a way to layout the HTML, position of divs/text/images, color, font-size, and adds customizability of the divs</li>
                <li> <b>JavaScript </b>
                    adds functionality of the website, whenever you add functionality to a button for example, javascript is required to create the functionality and do the task you want as a developer</li>

            </ul>
        </SingleEssay>
        <SingleEssay question={`Q2: What is the difference between Git and Github`}>
            <ul>
                <li><b>Git </b> is a tool for source code management where it tracks changes in source code, which allows multiple developers to work on the same file without any disconnect/breaking the entire structure.</li>
                <li> <b>GitHub </b> uses git by hosting the repositories which is your portfolio for projects. </li>
            </ul>
        </SingleEssay>
        <SingleEssay question={`Q3: What is the difference between jQuery and React?`}>
            <p>
                <b>React and jQuery</b> are javascript libraries that interact with the front-end. Pretty much everything jQuery can do, react can do, if not better.
            </p>
            <p>
                <b>React</b> uses functional/class based components which allows us to reuse different building blocks that is a part of our application.
                This means that we achieve cleaner code. React also allows us to pick and choose which components we want to display in a more efficient way as the components reload after each time the page changes
            </p>
            <p>
                <b>jQuery</b> used to be very popular back then because it was a there was more efficiency compared to using the DOM manipulation syntax. My personal experience is that it is very simple and straight to the point. However,
                it was very tedius in terms of trying to reuse components, and react is a lot mroe efficient with handling components
            </p>
        </SingleEssay>
    </EssaysStyled>
    );
}

export default Essays;


const EssaysStyled = styled.div`

`;

