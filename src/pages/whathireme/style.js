import Styled from "styled-components";

const WhyHireMeStyle = Styled.div`
width: 100%;
.whyhireme {
    display: flex;
    flex-direction: column;
    .main {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 80vh;
        .typo {
            display: flex;
            justify-content: center;
            position: relative;
            left: 10vw;
            top: 7vh;
        }
        .cards {
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            height: 50vh;
            padding-right: 350px;
            .horizontalcards {
                display: flex;
                justify-content: space-around;
                flex-direction: column;
                height: 50vh;
                top: 7vh;
                position: relative;
            }
        }
    }
    .circle {
        height: 20vh;
        background-color: #EDF1fc;
        .logos {
            height: 50px;
            width: 80%;
            display: flex;
            justify-content: space-around;
            img {
                padding-right: 30px;
            }
        }
    }

}


`;

export default WhyHireMeStyle;
