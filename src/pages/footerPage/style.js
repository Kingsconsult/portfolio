import Styled from "styled-components";

const PageWrapper = Styled.div`
width: 100%;
.customersreview {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .clients {
        display: flex;
        justify-content: center;
        .client {
            position: relative;
            top: 7vh;
            left: 10vw;
            width: 20vw;
        }
        
    }
    .review {
        display: flex;
        height: 50vh;
        justify-content: space-between;
        .reviews {
            display: flex;
            justify-content: space-around;
            padding-left: 30px;
            /* outline: 2px solid red; */
            width: 65vw;
            top: 7vh;
            position: relative;

        }
    }
    .bannerFooter {
        display: flex;
        flex-direction: column;
        .banner {
            align-self: center;
        }

    }
}
`;

export default PageWrapper;
