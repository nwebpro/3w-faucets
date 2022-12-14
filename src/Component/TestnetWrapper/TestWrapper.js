import styled from "styled-components"

export const TestnetWrapperStyle = styled.section`
    background-color: #eef2fe;
    padding-bottom: 20px;
`
export const ContentTitle = styled.div`
    padding: 48px 0px;
    font-family: "Varela Round",sans-serif;

    h2 {
        font-size: 35px;
        font-weight: 600;
        color: #9b1fe9;
        margin-bottom: 20px;
    }

    p {
        font-size: 16px;
        color: #3e64b7;
        width: 680px;
        line-height: 25px;
        margin-bottom: 0px;

        @media (max-width: 768px) {
            width: 100%;
        }
    }
`
export const FormWrapper = styled.div`
    padding: 25px 20px;
    border: 1px solid #eee;
    background: #fff;
    font-family: "Varela Round",sans-serif;
`
export const FormWarning = styled.div`
    background: #eef2fe;
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 10px;
    
    svg{
        color: #9b1fe9;
        font-size: 18px;
    }

    p{
        font-size: 14px;
        margin-bottom: 0px;

        span{
            font-weight: bold;
        }
    }
`
export const WalletForm = styled.div`
    width: 50%;
    margin-top: 15px;

    @media (max-width: 768px) {
        width: 100%;
    }

    label {
        font-weight: 600;
        color: #9b1fe9;
        font-size: 13px;
        margin-bottom: 0px;
    }

    input {
        margin-top: 5px;
        outline: none;
        border: 1px solid #eee;
        padding: 10px;
        border-radius: 3px;

        &:focus {
            outline: none;
            box-shadow: none;
            border-color: #eee;
        }

        &:disabled {
            background-color: #FAFAFA;
        }
    }
    
    button {
        background: #9b1fe9;
        color: #fff;
        font-size: 14px;
        padding: 10px 15px;
        border: none;
        border-radius: 3px;
    }
`
export const RequestHistory = styled.div`
    margin-top: 30px;

    h2 {
        margin-bottom: 20px;
        font-size: 15px;
        font-weight: 700;
    }

    ul.nav {
        border: none;

        li {
            button.nav-link {
                margin-right: 10px;
                padding: 10px 15px;
                background: #f5f7fd;
                font-size: 13px;
                border-radius: 3px;
                border: none;
                color: #000;
            }

            button.nav-link.active{
                background: #00f;
                color: #fff;
            }
        } 
    }

    table{
        border-collapse: collapse;

        thead, tbody {
            text-align: center;
        }

        th, td {
            border: 1px solid #eee;
            padding: 8px;
            font-size: 14px;
            min-width: 80px;
        }
    }
`


