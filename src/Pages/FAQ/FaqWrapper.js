import styled from "styled-components";

export const FaqWrapperStyle = styled.section`
    font-family: "Varela Round",sans-serif!important;
    overflow: hidden;

    .faq_content {
        h3 {
            margin: 50px 0;
            text-align: center;
            font-size: 30px;
            font-weight: 600;
            color: #9b1fe9;
        }
    }

    .faq_accordion_list_wrapper {
        width: 65%;
        margin: 0 auto;
        margin-bottom: 30px;

        @media (max-width: 768px) {
            width: 100%;
        }

        .accordion-item {
            border: 1px solid #eee;
            margin: 10px 0;

            .accordion-header {
                button {
                    font-size: 17px;
                    color: #1a2b6b;
                    font-weight: 600;
                }
            }

            .accordion-body {
                font-size: 14px;
                color: #6d7380;
                line-height: 24px;
            }
    
            &:first-child {
                border-top: 1px solid #eee;
            }
            &:last-child {
                border-bottom: 1px solid #eee;
            }

            .accordion-button {
                &:focus {
                    outline: none;
                    box-shadow: none;
                }

                &:not(.collapsed) {
                    color: #000;
                    background-color: transparent;
                }
            }
        }
    }

    
`