import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    box-shadow: 0px 2px 4px 1px rgba(121, 121, 121, 0.3);
    border-radius: 8px;
    overflow: hidden;
    table{
        width: 100%;
        border-collapse: collapse;
        thead, tr {
            border-bottom: 1px solid #CCCCCC;
        }
        tbody tr:hover{
            background-color: #EEEEEE;
        }
        th{
            padding: 10px 0;
            font-size: 18px;
            position: relative;
            &.order{
                cursor: pointer;
            }
            & i.arrow{
                border: solid black;
                border-width: 0 3px 3px 0;
                display: inline-block;
                padding: 3px;
                position: absolute;
                top: 15px;
                margin-left: 10px;
            }
            & i.down{
                transform: rotate(45deg);
                -webkit-transform: rotate(45deg);
            }
            & i.up{
                top: 20px;
                transform: rotate(-135deg);
                -webkit-transform: rotate(-135deg);
            }
        }
        td{
            padding: 7px 0;
            font-size: 16px;
            &.options > * {
                cursor: pointer;
                &:nth-child(2){
                    margin-left: 15px;
                }
            }
        }
        td, th{
            text-align: left;
            padding-left: 5px;
            overflow: hidden;
        }
        th .chevrons{
            display: inline-block;
        }
    }
`

export const Badge = styled.div`
    background-color: ${props => props.status == "Sim" ? '#ebf9eb' : '#fdebeb'};
    color: ${props => props.status == "Sim" ? '#46c445' : '#f03739'};
    display: inline;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
`