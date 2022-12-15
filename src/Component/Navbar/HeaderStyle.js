import styled from "styled-components";

export const NavStyle = styled.nav`
    border-bottom: 1px solid #eee;
`

export const HeaderWrapper = styled.div`
    font-family: "Varela Round",sans-serif;
    padding: 18px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header_content_area {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px; 

        .network_list {
            .form-select{
                font-size: 14px;
                border: 1px solid #ddd;
                padding: 10px 40px 10px 15px;
                border-radius: 3px;
                color: #6d7380;
                cursor: pointer;

                &:focus {
                    outline: none;
                    box-shadow: none;
                }

                @media (max-width: 576px) {
                    padding: 10px 20px 10px 15px;
                }
            }
        }

        .user_toggler {
            cursor: pointer;
            border: 1px solid #eee;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #eee;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #000;
            padding: 5px;
            box-shadow: 0 4px 10px -9px #6d7380;
    
            svg {
                font-size: 25px;
                color: #6d7380;
            }
        }
    
        .dropdown-toggle, .btn {
            &::after {
                display: none;
            }
    
            &:first-child {
                &:active {
                    background-color: #eee;
                    border-color: #eee;
                }
            }
        }

        .dropdown-menu.show {
            inset: 5px auto auto -120px !important;
            background: #fff;
            border: 1px solid #eee;
            padding: 10px;
            border-radius: 3px;
            box-shadow: 0 4px 9px -8px grey;
            
            a {
                text-decoration: none;
                font-size: 14px;
                color: #6d7380;
                display: block;
                padding: 5px 10px;

                &:hover {
                    background-color: #f5f7fd;
                }
            }
        }

        .connect_wlt_btn {
            button {
                display: flex;
                align-items: center;
                text-transform: capitalize;
                background: transparent;
                border: 2px solid #9b1fe9;
                padding: 5px 20px;
                border-radius: 3px;
                font-size: 14px;
                color: #9b1fe9;
                font-weight: 600;

                svg {
                    margin-right: 10px;
                }

                @media (max-width: 576px) {
                    border: 0px;
                    padding: 0px;

                    svg {
                        margin-right: 0px;
                        font-size: 25px;
                    }

                    span {
                        display: none;
                    }
                }
            
            }
        }

        .modal-header {
            .modal-title {
                font-size: 25px;
                font-weight: 600;
                color: #000;
            }
        }
    }
    
`

export const LogoArea = styled.div`
    a {
        text-decoration: none;
        font-size: 25px;
        font-weight: 600;
        font-family: "Varela Round",sans-serif;
        color: #9b1fe9;
    }
`
