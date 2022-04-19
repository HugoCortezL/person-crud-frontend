import styled from 'styled-components'

export const Container = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 50px;
    @media (min-width: 1060px) {
        border: 1px solid #c3c3c3;
        padding: 15px;
        border-radius: 10px;
    }
`

export const FormContainer = styled.div`
    .grid-area-double{
        display: grid;
        grid-template-columns: 49% 49%;
	    grid-template-rows: 90px;
        justify-content: space-between;
        align-items: center;
    }
    
    .grid-area-single{
        display: grid;
        grid-template-columns: 100%;
	    grid-template-rows: 70px;
    }
`

export const ButtonsContainer = styled.div`
    margin-top: 40px;
    text-align: right;
    button{
        padding: 8px 13px;
        font-size: 16px;
        border: 1px solid transparent;
        cursor: pointer;
        border-radius: 3px;
        font-weight: bold;
        &.save{
            margin-left: 15px;
            background-color: #40c740;
            color: white;
            &:hover{
                background-color: #44e744;
            }
        }
        &.cancel{
            background-color: #c74040;
            color: white;
            &:hover{
                background-color: #e74444;
            }
        }
    }
`