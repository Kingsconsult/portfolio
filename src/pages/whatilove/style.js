import Styled from "styled-components";
import Colors from "../../components/colors";

const WhatILoveStyle = Styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
.whatilove {
    display: flex;
    flex-direction: column;
    width: 100%;
    .main{
        display: flex;
        justify-content: space-around;
        height: 75vh;
        .cards {
            .another {
                .single1 {

                    position: relative;
                    top: -90px;
                    left: -50px;
                }
      
            }
        }

    }
    .circle {
        height: 25vh;
        background-color: #C2C9FD;
        display: flex;
        justify-content: space-around;
        .smallcircle {
            top: 20px;
            position: relative;
            .small1 {
                margin-left: 50px
            }
        }
    }
}

`;

export default WhatILoveStyle;
