import Styled from "styled-components";

const PageWrapper = Styled.div`
width: 100%;
height: 100vh;
.creativepage{
    display: flex;
    justify-content: space-between;

    .info {
        display: flex;
        flex-direction: column;
        left: -250px;
        position: relative;
        top: 7vh;;
        .creativetext {
            margin-bottom: 50px;
        }

    }
}
`
export default PageWrapper;