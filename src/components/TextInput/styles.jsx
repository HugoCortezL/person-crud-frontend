import styled from 'styled-components'

export const Container = styled.div`
    &.active{
        display: flex;
        align-items: center;
        margin-top: 25px;
        span{
            font-size: 18px;
        }
        span.left{
            margin-right: 10px;
        }
        span.right{
            margin-left: 10px;
        }
    }
    label{
        font-size: 15px;
        margin-left: 15px;
        &.switch{
            font-size: 1em;
            margin-left: 0;
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
            input{
                opacity: 0;
                width: 0;
                height: 0;
                & + .slider{
                    background-color: #6bff27;
                }
                &:checked + .slider{
                    background-color: #ff2828;
                    &:before{
                        -webkit-transform: translateX(26px);
                        -ms-transform: translateX(26px);
                        transform: translateX(26px);
                    }
                }
                &:focus + .slider{
                    box-shadow: 0 0 1px #2196F3;
                }
            }
            .slider{
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #ccc;
                -webkit-transition: .4s;
                transition: .4s;
                &:before{
                    position: absolute;
                    content: "";
                    height: 26px;
                    width: 26px;
                    left: 4px;
                    bottom: 4px;
                    background-color: white;
                    -webkit-transition: .4s;
                    transition: .4s;
                }
                &.round{
                    border-radius: 34px;
                    &:before{
                        border-radius: 50%;
                    }
                }
            }
        }
    }
    input[type="text"], input[type="date"]{
        border: 1px solid transparent;
        border-color: ${props => props.borderColor || '#c3c3c3'};
        font-size: 18px;
        padding: 10px 15px;
        width: 100%;
        border-radius: 5px;
        margin-top: 5px;
    }
    select{
        border: 1px solid transparent;
        border-color: ${props => props.borderColor || '#c3c3c3'};
        font-size: 18px;
        padding: 10px 15px;
        width: 100%;
        border-radius: 5px;
        margin-top: 5px;
    }
`