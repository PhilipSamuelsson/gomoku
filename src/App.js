import React from 'react'
import styled from 'styled-components'

import useBoard from './useBoard'
import Chess from './Chess'

const Title = styled.h1`
    color: #333;
    text-align: center;
`

const Wrapper = styled.div`
    text-align: center;
`

const Checkerboard = styled.div`
    display: inline-block;
    margin-top: 0;
`

const Row = styled.div`
    display: flex;
`

const WinnerModal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`

const ModalInner = styled.div`
    background: white;
    color: black;
    height: 300px;
    width: 300px;
    padding: 24px;
    text-align: center;
`

export default function App() {
    const { board, winner, handleChessClick } = useBoard()

    return (
        <div>
            <Title>五子棋 - GOMOKU</Title>
            {winner && (
                <WinnerModal>
                    <ModalInner>
                        {winner === 'draw'}
                        {winner === 'black'}
                        {winner === 'white'}
                        <br />
                        <button onClick={() => window.location.reload()}>
                            Restart
                        </button>
                    </ModalInner>
                </WinnerModal>
            )}
            <Wrapper>
                <Checkerboard>
                    {board.map((row, rowIndex) => {
                        return (
                            <Row key={rowIndex}>
                                {row.map((col, colIndex) => {
                                    return (
                                        <Chess
                                            key={colIndex}
                                            row={rowIndex}
                                            col={colIndex}
                                            value={board[rowIndex][colIndex]}
                                            onClick={handleChessClick}
                                        />
                                    )
                                })}
                            </Row>
                        )
                    })}
                </Checkerboard>
            </Wrapper>
        </div>
    )
}
