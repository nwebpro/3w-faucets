import styled from "styled-components";

export const AuthPageWrapper = styled.section`
    background-color: #eef2fe;
    font-family: "Varela Round",sans-serif!important;
    padding: 80px 0px;

    .auth_form {
        width: 35%;
        margin: auto;
        background: #fff;
        padding: 20px;
        border-radius: 3px;
        border: 1px solid #eee;
        box-shadow: 0 2px 5px -4px grey;

        @media (max-width: 1024px) {
            width: 70%;
        }

        @media (max-width: 576px) {
            width: 100%;
        }

        h2 {
            margin-bottom: 20px;
            font-size: 30px;
            font-weight: 600;
            text-align: center;
        }

        form {
            div {
                margin-bottom: 10px;
                position: relative;

                label {
                    font-size: 12px;
                    font-weight: 600;   
                }

                input {
                    width: 100%;
                    padding: 10px 0;
                    outline: none;
                    border: none;
                    border-bottom: 1px solid #b8b4b4;
                    font-size: 14px;
                    background: transparent;
                    border-radius: 0px;

                    &:focus {
                        outline: none;
                        box-shadow: none;
                    }
                }

                svg {
                    position: absolute;
                    right: 0;
                    bottom: 10px;
                    font-size: 20px;
                    cursor: pointer;
                    user-select: none;
                }

                button {
                    width: 100%;
                    padding: 10px 15px;
                    background: #9b1fe9;
                    color: #fff;
                    outline: none;
                    border: none;
                    cursor: pointer;
                    margin-top: 20px;
                    border-radius: 3px;
                    font-size: 15px;
                    font-weight: 600;
                }
            }
        }

        .auth_footer {
            margin-top: 20px;

            p {
                font-size: 13px;
                font-weight: 600;
                color: #000;
                text-align: center;

                a {
                    text-decoration: none;
                    color: #9b1fe9;
                }
            }

            .auth_media {
                margin-top: 20px;

                p {
                    font-size: 16px;
                }

                .media {
                    text-align: center;

                    svg {
                        margin: 10px;
                        font-size: 25px;
                        color: #9b1fe9;
                        cursor: pointer;
                    }
                }
            }

        }
    }
`

