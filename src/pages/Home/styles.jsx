import styled from 'styled-components'

export const Container = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 50px;
`

export const SearchContainer = styled.div`
    position: relative;
    margin-bottom: 30px;
    .icon{
        position: absolute;
        top: 14px;
        left: 10px;
    }
    button{
        height: 43px;
        width: 100px;
        position: absolute;
        top: 5px;
        right: 0;
        background: #fd746c;
        background: -webkit-linear-gradient(to right, #fd746c, #ff9068);
        background: linear-gradient(to right, #fd746c, #ff9068);
        color: white;
        font-size: 18px;
        font-weight: bold;
        border: none;
        border-radius: 5px;
        box-shadow: 2px 3px 2px rgba(253, 116, 108, 0.5);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        &:hover{
            box-shadow: 1px 2px 2px rgba(253, 116, 108, 0.5);
        }
    }
`