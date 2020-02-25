import Styled from "styled-components";

const PageWrapper = Styled.div`
width: 100%;
.landingPage{
    width: 100vw;
}
.navbar {
    position: absolute;
    width: 90%;
    margin: auto;
    top: 15px;
}
.herodiv{
    display: flex;
    justifyContent: space-between;
    .heroimg{
        img {
        height: 100vh;
        width: 50vw;
        }
    }
    .heroinfo {
        display: flex;
        justify-content: flex-end;
        align-self: center;
        margin-left: 50px;
    }
}
`;
export default PageWrapper;
