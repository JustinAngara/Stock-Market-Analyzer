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

        <SingleEssay question={`Q4: What is the difference between a Front-End and Back-End Developer?`}>
            <p>
                <b>Front-end</b> development is what you showcase to your user. The types of styles (css) done to tags, images, every bit of pieces that complete the 'look' of the website is the front-end
            </p>
            <p>
                <b>Back-end</b> development is involved with databases (can be relational or non relational , such as sql vs nosql) where you store data of any type. It typically depends on what type of data you want to save.
            </p>
        </SingleEssay>
        <SingleEssay question={'Q5: What are the different types to link resources?'}>
                <p><b>Root Relative and Document Relative</b> are both methods of linking different files, such as jsx, pngs/imgs, etc.</p>
                <p><b>Document Relative</b> represents where the file is located, and relative to that location, you are able to transverse through the file location and select certain files</p>
                <p><b>Root Relative</b> is able to reference the source, or the node at the top of the flow chart where you're able to transverse from top bottom. You reference from the src to multiple sub folders to files. </p>

        </SingleEssay>
        <SingleEssay question={'Q6: What are the Differences between Image file types?'}>
            <ul>

                <li><b>jpg</b> is a compressed image format, and commonly reliable way to compress detail into shareable file sizes, and ideal for blog content/social media</li>
                <li><b>gif</b> are a series of images that will continuously loop and is always text based. They have a semi-transparent feature. You may typically find the GIF format across social media. </li>
                <li><b>png</b> are used on websites to display high-quality images. They were created to exceed the performance and also has a broader color pallete; however, there are a few cons because their lossless compression typically causes a higher storage space </li>
            </ul>
        </SingleEssay>

        <SingleEssay question={'Q7: Define the following Agile roles: Product Manager, Product Owner, Business Analyst, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOps'}>
            <ul>

                <li><b>Product Owner</b> is able to prioritize features and ensures that product will align with business goals </li>
                <li><b>Product Manager</b> watches over the product's lifecyle, and often times overlaps with the business owner's role </li>
                <li><b>Business Analyst</b> understands the business needs, and compresses the ideas into requirements </li>
                <li><b>Scrum Master's</b> ensures that the Agile process (think breaking the project into phases, cycles, etc) and removes possible roadblocks for the team </li>
                <li><b>UX Designer</b> is intended soley for the psychologyt of the user's experience on a website (mostly focusing on the UI) </li>
                <li><b>Developer/Engineer</b> are the people who write code </li>
                <li><b>QA/SDET</b> is a team that test and try to break the program to find bugs before the product gets released </li>
                <li><b>DevOps</b> ensures the smooth deployment and maintenance of a product </li>
            </ul>
        </SingleEssay>
    </EssaysStyled>
    );
}

export default Essays;


const EssaysStyled = styled.div`
    color: whitesmoke
`;

