import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
    padding: 10px;
    border-radius: 5px;
    position: relative;
    margin-bottom: 10px;
`

export const FirstLine = styled.div`
    span.name{
        font-size: 22px;
        font-weight: bold;
    }
    span.gender{
        margin-left: 10px;
    }
`

export const DataPerson = styled.div`
    display: flex;
    flex-direction: column;
    span{
        span{
            font-weight: bold;
        }
    }
`

export const Badge = styled.div`
    background-color: ${props => props.status == "Sim" ? '#46c445' : '#f03739'};
    width: 15px;
    height: 15px;
    border-radius: 7.5px;
    position: absolute;
    right: 5px;
    top: 5px;
`

export const DeleteContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: 5px;
`